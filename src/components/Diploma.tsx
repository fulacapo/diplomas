import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface DiplomaProps {
  name: string;
  level: string;
  qualification: string;
  date?: string;
  onClose: () => void;
}

const Diploma: React.FC<DiplomaProps> = ({ name, level, qualification, date = "DICIEMBRE 2026", onClose }) => {
  const diplomaRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!diplomaRef.current) return;

    const canvas = await html2canvas(diplomaRef.current, {
      scale: 3, // High quality
      useCORS: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`Diploma_${name.replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <div className="diploma-overlay">
      <div className="diploma-actions">
        <button onClick={downloadPDF} className="btn-download">Descargar PDF</button>
        <button onClick={onClose} className="btn-close">Cerrar</button>
      </div>

      <div className="diploma-container" ref={diplomaRef}>
        <div className="diploma-border-outer">
          <div className="diploma-border-inner">
            <div className="diploma-content">
              {/* Crest/Logo */}
              <div className="diploma-header">
                <div className="diploma-crest">
                  <img src="/logo.png" alt="Belfast Institute" />
                </div>
                <h1 className="institute-name">BELFAST INSTITUTE</h1>
                <p className="founded-text">FUNDADO EN 1995</p>
              </div>

              <div className="diploma-body">
                <p className="constancia-text">SE DEJA CONSTANCIA QUE <strong>{name.toUpperCase()}</strong></p>

                <p className="aprobado-text">APROBÓ EL NIVEL : <strong>{level.toUpperCase()}</strong></p>

                <p className="mencion-text">CON MENCIÓN <strong>{qualification.toUpperCase()}</strong></p>

                <p className="location-date">ROSARIO, {date}</p>
              </div>

              <div className="diploma-footer">
                <div className="signature-area">
                  <img className="signature-img" src="/signature.png" alt="Firma" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <div className="signature-line"></div>
                  <p className="signer-name">SILVIA BENITEZ</p>
                  <p className="signer-title">Directora</p>
                </div>

                <div className="address-footer">
                  <span>Mendoza 6192</span>
                  <span className="separator">-</span>
                  <span>Rosario</span>
                  <span className="separator">-</span>
                  <span>Argentina</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .diploma-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          z-index: 1000;
          overflow-y: auto;
        }

        .diploma-actions {
          margin-bottom: 20px;
          display: flex;
          gap: 10px;
        }

        .btn-download {
          background: #2e7d32;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .btn-close {
          background: #d32f2f;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        /* Diploma Styling */
        .diploma-container {
          background: #fff;
          width: 210mm;
          min-height: 297mm;
          padding: 15mm;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
          position: relative;
          color: #333;
          font-family: 'Times New Roman', Times, serif;
          text-align: center;
        }

        .diploma-border-outer {
          border: 1px solid #666;
          height: 100%;
          padding: 3px;
        }

        .diploma-border-inner {
          border: 4px double #2e7d32;
          height: 100%;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .diploma-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .diploma-crest img {
          width: 160px;
          height: auto;
          margin-bottom: 10px;
        }

        .institute-name {
          font-size: 36px;
          margin: 10px 0 5px 0;
          letter-spacing: 2px;
          color: #000;
        }

        .founded-text {
          font-style: italic;
          font-size: 14px;
          color: #555;
          margin-bottom: 50px;
        }

        .diploma-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 40px;
          justify-content: center;
          margin-bottom: 60px;
        }

        .diploma-body p {
          font-size: 18px;
          margin: 0;
        }

        .diploma-body strong {
          font-size: 22px;
          padding-left: 5px;
        }

        .location-date {
          margin-top: 40px !important;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .diploma-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .signature-area {
          align-self: flex-end;
          width: 260px;
          margin-right: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .signature-img {
          display: block;
          width: 140px;
          height: auto;
          margin-bottom: 4px;
        }

        .signature-line {
          width: 100%;
          border-top: 1px dotted #333;
          margin-bottom: 5px;
        }

        .signer-name {
          font-weight: bold;
          font-size: 14px;
          margin: 0;
        }

        .signer-title {
          font-style: italic;
          font-size: 12px;
          margin: 0;
        }

        .address-footer {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 12px;
          color: #777;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }

        .separator {
          color: #ccc;
        }

        @media print {
          .diploma-overlay { background: none; padding: 0; }
          .diploma-actions { display: none; }
          .diploma-container { box-shadow: none; margin: 0; width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Diploma;
