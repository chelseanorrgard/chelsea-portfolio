import React from 'react';

const NursingResumeSV = () => {
  const skills = [
    "Första hjälpen (FHJ 2)", "Aseptisk teknik", "IV-kanylplacering",
    "Läkemedelshantering", "Äldreomsorg", "Ergonomi",
    "Patienthygien", "Vitala tecken", "Sårvård",
    "Injektioner", "Blodsockerövervakning", "Stomivård",
    "PEG-matningshantering", "Syrebehandling", "Luftvägsaspiration",
    "Trakeostomi vård", "Intravenös infusion", "Vene-punktioner",
    "Diagnostiska tester"
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
      <h2 className="text-2xl font-bold mb-2 text-pink-500">FÄRDIGHETER</h2>
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

      <h2 className="text-2xl font-bold mb-2 text-pink-500">ARBETSERFARENHET</h2>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">INMEDI OY</h3>
        <p className="italic mb-1">Vasa, Finland | Oktober 2020 – Juni 2022</p>
        <p>
          Nattvårdare för ett barn med en svår sällsynt sjukdom och en prematur. Ansvarade för andningsövervakning och behandling, medicinering, PEG-matning och allmän hälsoupprätthållning.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">ESPERI HOIVAKOTI GUSTAV</h3>
        <p className="italic mb-1">Vasa, Finland | Oktober 2019 – Januari 2020</p>
        <p>
          Tillfällig vårdare med basvård för 30 patienter på två enheter.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">ELVIRA SERVICEBOENDET</h3>
        <p className="italic mb-1">Korsholm, Finland | Maj 2019 – Augusti 2019</p>
        <p>
          Sommarvikarie som vårdare med basvård för 24 patienter på två enheter.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">VASA CENTRALSJUKHUS OLIKA AVDELNINGAR</h3>
        <p className="italic mb-1">Vasa, Finland | Augusti 2018 – Oktober 2018, Januari 2019 – April 2019, och Augusti 2019 – September 2019</p>
        <p>
          Kliniska placeringar som inkluderade arbete inom onkologi, dagkirurgi, kirurgisk vårdavdelning, kirurgisk poliklinik, dialys, hemvård, dagvård och psykiatrisk rehabilitering.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">CARL & CAROLINA ÅLDERDOMSHEMMET OCH HIMALAJA PALVELUTALO</h3>
        <p className="italic mb-1">Vasa, Finland | Maj 2017 – Juni 2017 och Februari 2018 – Mars 2018</p>
        <p>
          Praktikperioder som inkluderade grundläggande vård, äldrevård, och medicinsk utbildning såsom blodprov, övervakning av vitala funktioner, stomi- och sårvård, samt medicinhantering.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">UTBILDNING</h2>
      <h3 className="text-lg font-bold mb-1">Vaasan ammattikorkeakoulu</h3>
      <p className="italic mb-1">Vaasa, Finland | Förväntad examen år 2026</p>
      <ul className="list-disc list-inside mb-4">
        <li>Studerar för närvarande för en kandidatexamen i informationsteknik.</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">Oy Eduvamia Ab</h3>
      <p className="italic mb-1">Vaasa, Finland | 2020</p>
      <ul className="list-disc list-inside mb-4">
        <li>Integrationsutbildning / Kotoutumiskoulutus</li>
        <li>Avslutade samtidigt finska för sjuksköterskor (Sairaanhoitajan Suomi) och erhöll B1-nivå YKI-certifikat (Yleiset kielitutkinnot).</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">Yrkeshögskolan Novia</h3>
      <p className="italic mb-1">Vaasa, Finland | 2016 – 2019</p>
      <ul className="list-disc list-inside mb-4">
        <li>Kandidatexamen i sjuksköterskeutbildning</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">Washington State University</h3>
      <p className="italic mb-1">Pullman, WA, Förenta Staterna | 2002 – 2006</p>
      <ul className="list-disc list-inside mb-4">
        <li>Kandidatexamen i konst med inriktning på bildkonst med en mindre i kommunikation</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">SPRÅK</h2>
      <ul className="list-disc list-inside">
        <li>Engelska – Modersmål</li>
        <li>Finska – God tal- och skriftfärdighet (B1)</li>
        <li>Svenska – God tal- och skriftfärdighet (B1)</li>
      </ul>

    </div>
  );
};

export default NursingResumeSV;
