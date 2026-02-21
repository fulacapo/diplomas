import React, { useState } from 'react';
import { studentsData } from '../data/students';
import type { Student } from '../data/students';

import Diploma from './Diploma';
import { Download, Search, GraduationCap } from 'lucide-react';

const StudentList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<{ student: Student; level: string } | null>(null);

  const filteredData = studentsData.map(group => ({
    ...group,
    students: group.students.filter(s =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.students.length > 0);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="brand">
          <GraduationCap size={32} className="brand-icon" />
          <h1>Belfast Institute <span className="title-suffix">| Certificados 2026</span></h1>
        </div>
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar alumno..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="dashboard-content">
        {filteredData.map((group) => (
          <section key={group.level} className="level-section">
            <h2 className="level-title">{group.level}</h2>
            <div className="student-grid">
              {group.students.map((student, idx) => (
                <div key={`${group.level}-${idx}`} className="student-card">
                  <div className="student-info">
                    <span className="student-name">{student.name}</span>
                    <span className={`qualification-badge ${student.qualification.toLowerCase().replace(/\s+/g, '-')}`}>
                      {student.qualification}
                    </span>
                  </div>
                  <button
                    className="download-link"
                    onClick={() => setSelectedStudent({ student, level: group.level })}
                  >
                    <Download size={18} />
                    Plantilla
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {selectedStudent && (
        <Diploma
          name={selectedStudent.student.name}
          level={selectedStudent.level}
          qualification={selectedStudent.student.qualification}
          onClose={() => setSelectedStudent(null)}
        />
      )}

      <style>{`
        .dashboard {
          min-height: 100vh;
          background: #f8fafc;
          color: #1e293b;
          font-family: 'Inter', sans-serif;
        }

        .dashboard-header {
          background: #ffffff;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand h1 {
          font-size: 24px;
          margin: 0;
          font-weight: 800;
          color: #0f172a;
        }

        .title-suffix {
            font-weight: 300;
            color: #64748b;
        }

        .brand-icon {
          color: #10b981;
        }

        .search-bar {
          position: relative;
          width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .search-bar input {
          width: 100%;
          padding: 10px 10px 10px 40px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-bar input:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .dashboard-content {
          padding: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .level-section {
          margin-bottom: 40px;
        }

        .level-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #475569;
          border-left: 4px solid #10b981;
          padding-left: 12px;
        }

        .student-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .student-card {
          background: white;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .student-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .student-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .student-name {
          font-weight: 600;
          font-size: 15px;
        }

        .qualification-badge {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .sobresaliente { background: #dcfce7; color: #166534; }
        .distinguido { background: #dbeafe; color: #1e40af; }
        .muy-bueno { background: #fef9c3; color: #854d0e; }
        .bueno { background: #f1f5f9; color: #475569; }
        .aprobado { background: #fef2f2; color: #991b1b; }

        .download-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #10b981;
          background: #eff6ff;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .download-link:hover {
          background: #dcfce7;
        }
      `}</style>
    </div>
  );
};

export default StudentList;
