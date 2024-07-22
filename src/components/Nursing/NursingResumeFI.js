import React from 'react';

const NursingResumeFI = () => {
  const skills = [
    "Ensiapu (FHJ 2)", "Aseptinen tekniikka", "IV-kanylointi",
    "Lääkehoidon hallinta", "Ikääntyneiden hoito", "Ergonomia",
    "Potilashygienia", "Vitalsignaalit", "Haavahoito",
    "Injektiot", "Verensokerin seuranta", "Stooman hoito",
    "Ruokintaputken hallinta (PEG)", "Hapenhoito", "Ilmateiden imeminen",
    "Trakeostomian hoito", "Intravenoosinen infuusio", "Veneenpistot",
    "Diagnostiset testit"
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
      <h2 className="text-2xl font-bold mb-2 text-pink-500">TAIDOT</h2>
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

      <h2 className="text-2xl font-bold mb-2 text-pink-500">TYÖKOKEMUS</h2>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">INMEDI OY</h3>
        <p className="italic mb-1">Vaasa, Suomi | Lokakuu 2020 – Kesäkuu 2022</p>
        <p>
          Yövuorohoitaja vaikeasta harvinaisesta sairaudesta kärsivälle lapselle ja keskoselle. Hoito sisälsi hengitysseurannan ja -hoidot, lääkityksen, PEG-ruokinnan ja hyvän yleiskunnon ylläpitämisen.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">ESPERI HOIVAKOTI GUSTAV</h3>
        <p className="italic mb-1">Vaasa, Suomi | Lokakuu 2019 – Tammikuu 2020</p>
        <p>
          Väliaikainen lähihoitajan virka, joka sisälsi perushoitoa 30 potilaalle kahdessa osastossa.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">ELVIRA SERVICEBOENDET</h3>
        <p className="italic mb-1">Mustasaari, Suomi | Toukokuu 2019 – Elokuu 2019</p>
        <p>
          Kesäsijainen lähihoitajana. Tehtävänä perushoito 24 potilaalle kahdessa osastossa.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">VAASAN KESKUSSAIRAALA ERI OSASTOT</h3>
        <p className="italic mb-1">Vaasa, Suomi | Elokuu 2018 – Lokakuu 2018, Tammikuu 2019 – Huhtikuu 2019, ja Elokuu 2019 – Syyskuu 2019</p>
        <p>
          Kliiniset käytännöt, jotka sisälsivät onkologian alueen, päiväkirurgian, kirurgisen hoidon osaston, kirurgisen poliklinikan, dialyysin, kotihoidon, päiväyksikön ja mielenterveyskuntoutuksen.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">CARL & CAROLINA ÅLDERDOMSHEMMET JA HIMALAJA PALVELUTALO</h3>
        <p className="italic mb-1">Vaasa, Suomi | Toukokuu 2017 – Kesäkuu 2017 ja Helmikuu 2018 – Maaliskuu 2018</p>
        <p>
          Harjoittelujaksot, jotka sisälsivät perushoitoa, vanhainkodin toimintaa ja lääketieteellistä koulutusta, kuten verikokeet, elintärkeiden toimintojen tarkkailun, stoomihoidon, haavahoidon ja lääkehoidon.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">KOULUTUS</h2>
      <h3 className="text-lg font-bold mb-1">Vaasan ammattikorkeakoulu</h3>
      <p className="italic mb-1">Vaasa, Suomi | Valmistuminen odotetaan vuonna 2026</p>
      <ul className="list-disc list-inside mb-4">
        <li>Opiskelee tällä hetkellä tietotekniikan insinöörin tutkintoa.</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">Oy Eduvamia Ab</h3>
      <p className="italic mb-1">Vaasa, Suomi | 2020</p>
      <ul className="list-disc list-inside mb-4">
        <li>Integraatiokoulutus / Kotoutumiskoulutus</li>
        <li>Suoritti samanaikaisesti Suomen sairaanhoitajille suunnatun koulutuksen ja sai B1-tason YKI-sertifikaatin (Yleiset kielitutkinnot).</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">Yrkeshögskolan Novia</h3>
      <p className="italic mb-1">Vaasa, Suomi | 2016 – 2019</p>
      <ul className="list-disc list-inside mb-4">
        <li>Sairaanhoitajan kandidaatti</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">Washingtonin State University</h3>
      <p className="italic mb-1">Pullman, WA, Yhdysvallat | 2002 – 2006</p>
      <ul className="list-disc list-inside mb-4">
        <li>Taidekandidaatti, sivuaineena viestintä</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">KIELI</h2>
      <ul className="list-disc list-inside">
        <li>Englanti – Äidinkieli</li>
        <li>Suomi – Hyvä puhe- ja kirjoitustaito (B1)</li>
        <li>Ruotsi – Hyvä puhe- ja kirjoitustaito (B1)</li>
      </ul>

    </div>
  );
};

export default NursingResumeFI;

