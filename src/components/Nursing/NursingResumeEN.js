import React from 'react';

const NursingResumeEN = () => {
  const skills = [
    "First Aid (FHJ 2)", "Aseptic Technique", "IV Cannulation",
    "Medication Management", "Elderly Care", "Ergonomics",
    "Patient Hygiene", "Vital Signs", "Wound Care",
    "Injections", "Blood Glucose Monitoring", "Stoma Care",
    "Feeding Tube Management (PEG)", "Oxygen Therapy", "Airway Suctioning",
    "Tracheostomy Care", "Intravenous Infusion", "Venipuncture",
    "Diagnostic Tests"
  ];

  // Function to chunk the skills array into groups of three
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  // Chunk the skills array into groups of three
  const chunkedSkills = chunkArray(skills, 3);

  return (
    <div className="px-4 py-2">
      <h2 className="text-2xl font-bold mb-2 text-pink-500">SKILLS</h2>
      <table className="w-full table-fixed mb-4">
        <tbody>
          {chunkedSkills.map((chunk, index) => (
            <tr key={index}>
              {chunk.map((skill, idx) => (
                <td key={idx} className="px-2 py-0">{skill}</td>
              ))}
              {/* Add empty <td> elements to fill the row if it's not full */}
              {chunk.length < 3 && (
                Array.from({ length: 3 - chunk.length }).map((_, i) => (
                  <td key={`empty-${i}`} className="px-2 py-1"></td>
                ))
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">WORK EXPERIENCE</h2>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">INMEDI OY</h3>
        <p className="italic mb-1">Vaasa, Finland | October 2020 – June 2022</p>
        <p>
          Night shift nurse for children and prematurely born infants affected by severe rare disease or lasting birth complications. Treatment includes respiratory monitoring and treatments, medication administration, PEG feeding, and maintaining good general health.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">ESPERI HOIVAKOTI GUSTAV</h3>
        <p className="italic mb-1">Vaasa, Finland | October 2019 – January 2020</p>
        <p>
          Temporary nursing position involving basic care for 30 patients across two departments.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">ELVIRA SERVICEBOENDET</h3>
        <p className="italic mb-1">Korsholm, Finland | May 2019 – August 2019</p>
        <p>
          Summer substitute nurse role providing basic care for 24 patients across two departments.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">VAASA CENTRAL HOSPITAL VARIOUS WARDS</h3>
        <p className="italic mb-1">Vaasa, Finland | August 2018 – October 2018, January 2019 – April 2019, August 2019 – September 2019</p>
        <p>
          Clinical placements covering oncology, day surgery, surgical unit, surgical outpatient clinic, dialysis, home care, day unit, and mental health rehabilitation.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">CARL & CAROLINA ÅLDERDOMSHEMMET AND HIMALAJA PALVELUTALO</h3>
        <p className="italic mb-1">Vaasa, Finland | May 2017 – June 2017, February 2018 – March 2018</p>
        <p>
          Training sessions encompassed basic care, nursing home operations, and medical training such as blood sampling, vital signs monitoring, stoma care, wound care, and medication management.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">EDUCATION</h2>
      <h3 className="text-lg font-bold mb-1">Vaasa University of Applied Sciences</h3>
      <p className="italic mb-1">Vaasa, Finland | Expected graduation in 2026</p>
      <ul className="list-disc list-inside mb-4">
        <li>Currently studying for a Bachelor of Engineering in Information Technology.</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">Oy Eduvamia Ab</h3>
      <p className="italic mb-1">Vaasa, Finland | 2020</p>
      <ul className="list-disc list-inside mb-4">
        <li>Integration Training / Kotoutumiskoulutus</li>
        <li>Concurrently completed Finnish for Nurses (Sairaanhoitajan Suomi) and earned B1 level YKI certificate (Yleiset kielitutkinnot).</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">Yrkeshögskolan Novia</h3>
      <p className="italic mb-1">Vaasa, Finland | 2016 – 2019</p>
      <ul className="list-disc list-inside mb-4">
        <li>Bachelor of Nursing</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">Washington State University</h3>
      <p className="italic mb-1">Pullman, WA, USA | 2002 – 2006</p>
      <ul className="list-disc list-inside mb-4">
        <li>Bachelor of Art in Fine Arts with a minor in Communication</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">LANGUAGES</h2>
      <ul className="list-disc list-inside">
        <li>English – Native Proficiency</li>
        <li>Swedish – Proficient (B1)</li>
        <li>Finnish – Proficient (B1)</li>
      </ul>

    </div>
  );
};

export default NursingResumeEN;


