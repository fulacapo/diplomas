export interface Student {
    name: string;
    qualification: string;
}

export interface LevelGroup {
    level: string;
    students: Student[];
}

export const studentsData: LevelGroup[] = [
    {
        level: "Kids 1",
        students: [
            { name: "Charo Funes", qualification: "Sobresaliente" },
            { name: "Gennaro Landucci", qualification: "Distinguido" },
            { name: "Lorenzo Leguizamón González", qualification: "Muy Bueno" },
            { name: "Chloe Merlalách", qualification: "Muy Bueno" },
            { name: "Lua Santos Esquivel", qualification: "Muy Bueno" }
        ]
    },
    {
        level: "Kids 2",
        students: [
            { name: "Pilar Ahumada", qualification: "Distinguido" },
            { name: "Ignacio Alejandres", qualification: "Distinguido" },
            { name: "Maia Barbudes", qualification: "Distinguido" },
            { name: "Camil Franco Jonas", qualification: "Muy Bueno" },
            { name: "Emma Valentina Dantesano", qualification: "Muy Bueno" },
            { name: "Franchesca Dominguez", qualification: "Muy Bueno" },
            { name: "Julia Fernandez", qualification: "Muy Bueno" },
            { name: "Lautaro Gomez Stoichich", qualification: "Distinguido" },
            { name: "Bruno Gael Lopez Molinas", qualification: "Distinguido" },
            { name: "Ciro Neumayer", qualification: "Muy Bueno" },
            { name: "Emiliano Pigliapoco", qualification: "Distinguido" },
            { name: "Amadeo Rodriguez", qualification: "Sobresaliente" },
            { name: "Angel Arias Sueldo", qualification: "Distinguido" },
            { name: "Ezequiel Agustin Troccoli", qualification: "Distinguido" },
            { name: "Vittoria Yacono", qualification: "Muy Bueno" }
        ]
    },
    {
        level: "Kids 3",
        students: [
            { name: "Pilar Angiolini", qualification: "Muy Bueno" },
            { name: "Constantino Anselmi", qualification: "Bueno" },
            { name: "Jeremías Iousa Blanco", qualification: "Bueno" },
            { name: "Sofia Belen Araujo Maneses", qualification: "Muy Bueno" },
            { name: "De Frenza Lucio", qualification: "Bueno" },
            { name: "Mateo Ligirda", qualification: "Muy Bueno" },
            { name: "Laureano Maradona", qualification: "Bueno" },
            { name: "Emilia Martin Bortolussi", qualification: "Aprobado" },
            { name: "Fausto Mazzaccesi", qualification: "Distinguido" },
            { name: "Benjamin Saldias", qualification: "Muy Bueno" },
            { name: "Agustin Uberti", qualification: "Distinguido" }
        ]
    },
    {
        level: "Kids 4",
        students: [
            { name: "Francesca Sabah", qualification: "Bueno" },
            { name: "Lupe Sanchez", qualification: "Bueno" },
            { name: "Lautaro Sandoval", qualification: "Muy Bueno" },
            { name: "Giana Siffredi", qualification: "Muy Bueno" },
            { name: "Agostina Sigal", qualification: "Distinguido" },
            { name: "Agustin Venezia", qualification: "Distinguido" },
            { name: "Jazmin Zana", qualification: "Muy Bueno" },
            { name: "Marcos Arenzo", qualification: "Aprobado" },
            { name: "Macarena Gutierrez Balboa", qualification: "Muy Bueno" },
            { name: "Abril Bustamante", qualification: "Muy Bueno" },
            { name: "Sara Cepeda", qualification: "Muy Bueno" },
            { name: "Bianca Colombo", qualification: "Muy Bueno" },
            { name: "Martina Farias", qualification: "Sobresaliente" },
            { name: "Luisina Galán", qualification: "Muy Bueno" },
            { name: "Teo Gimenez", qualification: "Aprobado" },
            { name: "Lazaro Leguizamon Gonzalez", qualification: "Bueno" },
            { name: "Tobias Mogro", qualification: "Bueno" },
            { name: "Carolina Quiroga", qualification: "Distinguido" },
            { name: "Luciana Quiroga", qualification: "Distinguido" },
            { name: "Manuel Robles Gasaza", qualification: "Muy Bueno" },
            { name: "Matias Robles Gasaza", qualification: "Muy Bueno" }
        ]
    },
    {
        level: "Kids 5",
        students: [
            { name: "Chiara Acevedo", qualification: "Muy Bueno" },
            { name: "Ana Paula Colla", qualification: "Distinguido" },
            { name: "Santiago Dalombo", qualification: "Muy Bueno" },
            { name: "Santino López Lattuca", qualification: "Bueno" },
            { name: "Emilia Gomez", qualification: "Distinguido" },
            { name: "Andres Rodriguez", qualification: "Sobresaliente" },
            { name: "Martina Zalazar", qualification: "Muy Bueno" }
        ]
    },
    {
        level: "Teens 1",
        students: [
            { name: "Franco Coppini", qualification: "Muy Bueno" },
            { name: "Malena Diaz Cova", qualification: "Muy Bueno" },
            { name: "Valentino Gaggiolli", qualification: "Muy Bueno" },
            { name: "Maria Milagros Garay", qualification: "Muy Bueno" },
            { name: "Victoria Paz Iocco", qualification: "Aprobado" },
            { name: "Fausto Ludovico", qualification: "Distinguido" },
            { name: "Joaquin Martin", qualification: "Bueno" },
            { name: "Jerónimo Ojeda", qualification: "Sobresaliente" },
            { name: "Felipe Rodriguez", qualification: "Muy Bueno" },
            { name: "Emilia Suarez", qualification: "Distinguido" },
            { name: "Olivia Oviedo Zanon", qualification: "Muy Bueno" }
        ]
    },
    {
        level: "Teens 2",
        students: [
            { name: "Ignacio Altamirano", qualification: "Muy Bueno" },
            { name: "Santiago Bruno", qualification: "Bueno" },
            { name: "Sol Cias", qualification: "Muy Bueno" },
            { name: "Josefina Comanzo", qualification: "Muy Bueno" },
            { name: "Alma Coppini", qualification: "Distinguido" },
            { name: "Catalina Costa", qualification: "Muy Bueno" },
            { name: "D'Angiolillo Rodrigo", qualification: "Distinguido" },
            { name: "Isabella Divito", qualification: "Muy Bueno" },
            { name: "Violeta Gangi", qualification: "Muy Bueno" },
            { name: "Bianca Giannone", qualification: "Muy Bueno" },
            { name: "Catalina Labrados Buero", qualification: "Muy Bueno" },
            { name: "Lauro Lopez", qualification: "Distinguido" },
            { name: "Morena Vitoria Mendez", qualification: "Sobresaliente" },
            { name: "Mia Moine", qualification: "Muy Bueno" },
            { name: "Catalina Petrichivich", qualification: "Bueno" },
            { name: "Micaela Ronga", qualification: "Muy Bueno" },
            { name: "Alessio Romero", qualification: "Distinguido" },
            { name: "Bianca Volpe", qualification: "Distinguido" },
            { name: "Ornella Yacono", qualification: "Muy Bueno" }
        ]
    },
    {
        level: "Teens 3",
        students: [
            { name: "Costanza Pigliapoco", qualification: "Muy Bueno" },
            { name: "Lucia Quintero", qualification: "Muy Bueno" },
            { name: "Valentina Varano", qualification: "Bueno" },
            { name: "Maitena Dicierno", qualification: "Muy Bueno" },
            { name: "Milena Fernandez", qualification: "Bueno" },
            { name: "Lucia Ligirda", qualification: "Muy Bueno" },
            { name: "Ignacio Masadona", qualification: "Bueno" },
            { name: "Luca Medina Colomb", qualification: "Muy Bueno" },
            { name: "Josefina Molinas", qualification: "Distinguido" }
        ]
    },
    {
        level: "Teens 4",
        students: [
            { name: "Lorenzo Leiva", qualification: "Muy Bueno" },
            { name: "Felipe Montagna", qualification: "Bueno" },
            { name: "Lisandro Ramirez", qualification: "Bueno" },
            { name: "Pilar Ruiz", qualification: "Muy Bueno" },
            { name: "Avril Acevedo", qualification: "Muy Bueno" },
            { name: "Valentin Azuaga", qualification: "Muy Bueno" },
            { name: "Tomas Benitez", qualification: "Bueno" },
            { name: "Pilar Boggio", qualification: "Bueno" },
            { name: "Regina Cabello", qualification: "Bueno" },
            { name: "Alejo Calderon", qualification: "Muy Bueno" },
            { name: "Abril Do Brito", qualification: "Muy Bueno" },
            { name: "Azul Do Brito", qualification: "Muy Bueno" },
            { name: "Sara Fontana", qualification: "Muy Bueno" },
            { name: "Tomas Fontana", qualification: "Bueno" },
            { name: "Albertina Gurrieri", qualification: "Muy Bueno" },
            { name: "Agustín Manachino", qualification: "Muy Bueno" }
        ]
    },
    {
        level: "Teens 5",
        students: [
            { name: "Belén Campos", qualification: "Bueno" },
            { name: "Paulina Cengarle", qualification: "Muy bueno" },
            { name: "Emma Imperiale Fiori", qualification: "Bueno" },
            { name: "Francisco Ojeda", qualification: "Bueno" },
            { name: "Joaquín Pedro Rimolo", qualification: "Muy bueno" },
            { name: "Melina Vera", qualification: "Bueno" }
        ]
    },
    {
        level: "Teens 6",
        students: [
            { name: "Victoria Bottino", qualification: "Muy bueno" },
            { name: "Abril Turesso", qualification: "Muy bueno" },
            { name: "Paulina Cengarle", qualification: "Muy bueno" }
        ]
    },
    {
        level: "1st Year",
        students: [
            { name: "Silvana Astore", qualification: "Muy bueno" },
            { name: "Celina Maria Asnes", qualification: "Distinguido" },
            { name: "Gonzalo Artale", qualification: "Muy bueno" },
            { name: "Camila Arguello", qualification: "Bueno" }
        ]
    },
    {
        level: "2cd Year",
        students: [
            { name: "Morena Bosso", qualification: "Bueno" },
            { name: "Dellamera Florencia", qualification: "Muy bueno" },
            { name: "Joaquín Travella", qualification: "Distinguido" },
            { name: "María Belén Vesaldi", qualification: "Bueno" }
        ]
    },
    {
        level: "3rd Year",
        students: [
            { name: "Tiago Cardinale", qualification: "Distinguido" },
            { name: "Vanina Gutierrez", qualification: "Muy bueno" },
            { name: "Silvina Sueiro", qualification: "Distinguido" }
        ]
    }
];
