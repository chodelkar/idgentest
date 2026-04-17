// Function to generate ID based on selected country
function generateID() {
  var country = document.getElementById("country").value;
  var generatedID = "";
  var phone = "";
  var address = "";
  var city = "";
  var zip = "";
  var phoneWarning = "";

  switch (country) {
    case "romania":
	  generatedID = generateCNP_Romania();
	  phone = generatePhone_Romania();
	  address = generateAddress_Romania();
	  city = "";
	  zip = "";
  break;
    case "poland":
	  generatedID = generatePESEL_Poland();
	  phone = "";
	  address = "";
	  city = "";
	  zip = "";
	  break;
    case "serbia":
      case "serbia":
	  generatedID = generateJMBG_Serbia();
	  phone = generatePhone_Serbia();
	  address = generateAddress_Serbia();
	  city = generateCity_Serbia();
	  zip = "";
	  break;
    case "belgium":
	  generatedID = generateNIN_Belgium();
	  phone = generatePhone_Belgium();
	  address = generateAddress_Belgium();
	  city = generateCity_Belgium();
	  zip = generateZip_Belgium();
	  break;
    case "bulgaria":
      generatedID = generateEGN_Bulgaria();
      phone = generatePhone_Bulgaria();
      address = generateAddress_Bulgaria();
      city = generateCity_Bulgaria();
      zip = generateZip_Bulgaria();
      break;
    case "brazil":
	  generatedID = generateCPF_Brazil();
	  phone = generatePhone_Brazil();
	  address = generateAddress_Brazil();
	  city = generateCity_Brazil();
	  zip = generateZip_Brazil();
	  phoneWarning = '<div class="alert alert-warning mt-2" role="alert"><strong>⚠️ Note:</strong> After the account is created, please change the phone number to <strong>11912222333</strong>.</div>';
	  break;
    case "greece":
	  generatedID = generateAFM_Greece();
	  phone = generatePhone_Greece();
	  address = generateAddress_Greece();
	  city = generateCity_Greece();
	  zip = generateZip_Greece();
	  break;
    default:
      generatedID = "Select a country and click 'Generate ID'.";
      break;
  }

  document.getElementById("generatedID").innerHTML = `
  <table class="table table-bordered mt-3" style="table-layout: fixed; width: 60%;">
    <colgroup>
      <col style="width: 40px;">
      <col style="width: 90px;">
      <col style="width: 15px;">
    </colgroup>
    <tbody>
      <tr><th scope="row" style="white-space: nowrap;">National ID</th><td><strong>${generatedID}</strong></td><td class="copy-cell"><button class="btn-copy" onclick="copyToClipboard('${generatedID}')">📋</button></td></tr>
      ${phone ? '<tr><th scope="row" style="white-space: nowrap;">Phone Number</th><td>' + phone + '</td><td class="copy-cell"><button class="btn-copy" onclick="copyToClipboard(\'' + phone.replace(/'/g, "\\'") + '\')">📋</button></td></tr>' : ""}
      ${phoneWarning ? '<tr><td colspan="3">' + phoneWarning + '</td></tr>' : ""}
      ${address ? '<tr><th scope="row" style="white-space: nowrap;">Address</th><td>' + address + '</td><td class="copy-cell"><button class="btn-copy" onclick="copyToClipboard(\'' + address.replace(/'/g, "\\'") + '\')">📋</button></td></tr>' : ""}
      ${city ? '<tr><th scope="row" style="white-space: nowrap;">City</th><td>' + city + '</td><td class="copy-cell"><button class="btn-copy" onclick="copyToClipboard(\'' + city.replace(/'/g, "\\'") + '\')">📋</button></td></tr>' : ""}
      ${zip ? '<tr><th scope="row" style="white-space: nowrap;">ZIP / Postal Code</th><td>' + zip + '</td><td class="copy-cell"><button class="btn-copy" onclick="copyToClipboard(\'' + zip.replace(/'/g, "\\'") + '\')">📋</button></td></tr>' : ""}
    </tbody>
  </table>`;
}

// ─── Shared helpers ──────────────────────────────────────────────────────────

// Function to copy text to clipboard
function copyToClipboard(text) {
  const btn = document.activeElement; // captura o botão ANTES do async
  navigator.clipboard.writeText(text).then(() => {
    // Visual feedback
    const originalText = btn.textContent;
    btn.textContent = '✓';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('copied');
    }, 2000);
  }).catch((err) => {
    console.error('Clipboard error:', err);
    alert('Failed to copy to clipboard');
  });
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pad(n, len) {
  return String(n).padStart(len, '0');
}

// ─── ROMANIA ─────────────────────────────────────────────────────────────────

function generatePhone_Romania() {
  // Romanian mobile prefixes: 07XX
  const prefixes = ['72', '73', '74', '75', '76', '77', '78'];
  return pick(prefixes) + pad(rnd(0, 9999999), 7);
}

const streetPrefixes_Romania = ['Strada', 'Bulevardul', 'Calea', 'Aleea', 'Intrarea', 'Splaiul', 'Fundătura', 'Piața'];

const streetNouns_Romania = {
  feminine: [
    'Florilor', 'Teilor', 'Salcâmilor', 'Trandafirilor', 'Violetelor',
    'Viorilor', 'Rozelor', 'Cireșilor', 'Prunilor', 'Cornului',
    'Ierbii', 'Pajiștilor', 'Mestecenilor', 'Frasinilor',
  ],
  masculine: [
    'Plopilor', 'Brazilor', 'Fagilor', 'Stejarilor', 'Ulmilor',
    'Castanilor', 'Pinilor', 'Molidului', 'Carpenilor', 'Arțarilor',
    'Aninilor', 'Jugastrilor', 'Nucilor',
  ],
};

const streetAdjectives_Romania = {
  feminine: [
    'Înflorite', 'Verzi', 'Sălbatice', 'Liniștite', 'Umbroase',
    'Luminoase', 'Frumoase', 'Adânci', 'Înguste', 'Largi',
    'Tăcute', 'Răcoroase', 'Domoale', 'Cețoase', 'Diafane',
    'Tremurânde', 'Opalescente', 'Crepusculare', 'Argintii', 'Întunecate',
  ],
  masculine: [
    'Înfloriți', 'Verzi', 'Sălbatici', 'Liniștiți', 'Umbroși',
    'Luminoși', 'Frumoși', 'Adânci', 'Înguști', 'Largi',
    'Tăcuți', 'Răcoriți', 'Domoli', 'Cetoși', 'Diafani',
    'Tremurânzi', 'Opalescenți', 'Crepusculari', 'Argintii', 'Întunecați',
  ],
};

function generateAddress_Romania() {
  const prefix = pick(streetPrefixes_Romania);
  const gender = Math.random() < 0.5 ? 'feminine' : 'masculine';
  const noun   = pick(streetNouns_Romania[gender]);
  const adj    = pick(streetAdjectives_Romania[gender]);
  const number = Math.floor(Math.random() * 1000);
  return `${prefix} ${noun} ${adj}, ${number}`;
}

function generateZip_Romania() {
  // Romanian ZIP: 6 digits, first 2 = county code (01-46)
  return pad(rnd(1, 46), 2) + pad(rnd(0, 9999), 4);
}

// ─── POLAND ──────────────────────────────────────────────────────────────────

function generatePhone_Poland() {
  // Polish mobile: +48 followed by 9 digits starting with 5,6,7,8
  const starts = ['45', '50', '51', '53', '57', '60', '66', '69', '72', '73', '78', '79'];
  return '+48 ' + pick(starts) + pad(rnd(0, 9999999), 7);
}

const streetPrefixes_Poland = ['ul.', 'al.', 'pl.', 'skwer', 'rondo', 'bulwar', 'os.'];

const streetNouns_Poland = {
  feminine: [
    'Góra', 'Łąka', 'Dolina', 'Polana', 'Rzeka',
    'Wierzbina', 'Brzozina', 'Lipa', 'Wiosna', 'Jesień',
    'Woda', 'Mgła', 'Zorza', 'Topola',
  ],
  masculine: [
    'Las', 'Bór', 'Staw', 'Jar', 'Wąwóz',
    'Dąb', 'Buk', 'Klon', 'Wiąz', 'Jesion',
    'Potok', 'Świerk', 'Modrzew', 'Grab',
  ],
};

const streetAdjectives_Poland = {
  feminine: [
    'Zielona', 'Cicha', 'Spokojna', 'Słoneczna', 'Leśna',
    'Polna', 'Głęboka', 'Mroczna', 'Jasna', 'Dzika',
    'Stara', 'Nowa', 'Błękitna', 'Biała', 'Wiosenna',
    'Jesienna', 'Zimowa', 'Mgłowa', 'Srebrna', 'Złota',
    'Bursztynowa', 'Opalizująca', 'Świetlista', 'Drżąca', 'Zamglona',
  ],
  masculine: [
    'Zielony', 'Cichy', 'Spokojny', 'Słoneczny', 'Leśny',
    'Polny', 'Głęboki', 'Mroczny', 'Jasny', 'Dziki',
    'Stary', 'Nowy', 'Błękitny', 'Biały', 'Wiosenny',
    'Jesienny', 'Zimowy', 'Mgłowy', 'Srebrny', 'Złoty',
    'Bursztynowy', 'Opalizujący', 'Świetlisty', 'Drżący', 'Zamglony',
  ],
};

function generateAddress_Poland() {
  const prefix = pick(streetPrefixes_Poland);
  const gender = Math.random() < 0.5 ? 'feminine' : 'masculine';
  const adj    = pick(streetAdjectives_Poland[gender]);
  const noun   = pick(streetNouns_Poland[gender]);
  const number = Math.floor(Math.random() * 1000);
  return `${prefix} ${adj} ${noun}, ${number}`;
}

function generateCity_Poland() {
  const cities = [
    'Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Katowice',
    'Białystok', 'Gdynia', 'Częstochowa', 'Radom', 'Sosnowiec', 'Toruń', 'Kielce', 'Rzeszów', 'Dąbrowa Górnicza', 'Wałbrzych',
    'Gliwice', 'Zabrze', 'Bytom', 'Ruda Śląska', 'Tychy', 'Mysłowice', 'Pabianice', 'Rybnik', 'Chorzów', 'Jaworzno',
    'Siedlce', 'Legionowo', 'Piła', 'Kalisz', 'Konin', 'Grudziądz', 'Słupsk', 'Elbląg', 'Tarnów', 'Nowy Targ',
    'Nowy Sącz', 'Oświęcim', 'Chrzanów', 'Limanowa', 'Brodnica', 'Mielec', 'Krosno', 'Sanok', 'Jasło', 'Stalowa Wola',
    'Tarnobrzeg', 'Kolbuszowa', 'Łęczna', 'Radzyń Podlaski', 'Biała Podlaska', 'Chełm', 'Zamość', 'Hrubieszów', 'Tomaszów Lubelski', 'Biłgoraj',
    'Świdnik', 'Puławy', 'Chełm', 'Kraśnik', 'Jastków', 'Ciechanów', 'Mława', 'Przysucha', 'Radomsko', 'Piotrków Trybunalski',
    'Sochaczew', 'Piaseczno', 'Milanówek', 'Ożarów Mazowiecki', 'Piastów', 'Pruszków', 'Żyrardów', 'Rawina', 'Ostrołęka', 'Mszczonów'
  ];
  return pick(cities);
}

function generateZip_Poland() {
  // Polish postal code: XX-XXX
  return pad(rnd(0, 99), 2) + '-' + pad(rnd(0, 999), 3);
}

// ─── SERBIA ──────────────────────────────────────────────────────────────────

function generatePhone_Serbia() {
  // Serbian mobile: +381 6X XXXXXXX
  const prefixes = ['060', '061', '062', '063', '064', '065', '066'];
  return pick(prefixes).slice(1) + pad(rnd(0, 9999999), 7);
}

const streetPrefixes_Serbia = ['Ulica', 'Bulevar', 'Trg', 'Aleja', 'Venac', 'Sokak', 'Kej'];

const streetNouns_Serbia = {
  feminine: [
    'Lipa', 'Breza', 'Vrba', 'Topola', 'Jabuka',
    'Trešnja', 'Šljiva', 'Kruška', 'Reka', 'Dolina',
    'Planina', 'Livada', 'Šuma', 'Bukva',
  ],
  masculine: [
    'Javor', 'Hrast', 'Bor', 'Orah', 'Kesten',
    'Jasen', 'Brest', 'Gaj', 'Lug', 'Potok',
    'Kamen', 'Vis', 'Greben', 'Grab',
  ],
};

const streetAdjectives_Serbia = {
  feminine: [
    'Zelena', 'Tiha', 'Mirna', 'Divlja', 'Svetla',
    'Tamna', 'Duboka', 'Uska', 'Široka', 'Hladna',
    'Topla', 'Stara', 'Nova', 'Visoka', 'Niska',
    'Maglena', 'Sijajuća', 'Trepereća', 'Vetrovita', 'Senovita',
    'Prozirna', 'Spokojana', 'Jesenja', 'Zimska', 'Isparena',
  ],
  masculine: [
    'Zeleni', 'Tihi', 'Mirni', 'Divlji', 'Svetli',
    'Tamni', 'Duboki', 'Uski', 'Široki', 'Hladni',
    'Topli', 'Stari', 'Novi', 'Visoki', 'Niski',
    'Magleni', 'Sijajući', 'Trepereći', 'Vetroviti', 'Senoviti',
    'Prozirni', 'Spokojni', 'Jesenji', 'Zimski', 'Ispareni',
  ],
};

function generateAddress_Serbia() {
  const prefix = pick(streetPrefixes_Serbia);
  const gender = Math.random() < 0.5 ? 'feminine' : 'masculine';
  const adj    = pick(streetAdjectives_Serbia[gender]);
  const noun   = pick(streetNouns_Serbia[gender]);
  const number = Math.floor(Math.random() * 1000);
  return `${prefix} ${adj} ${noun}, ${number}`;
}

function generateCity_Serbia() {
  const cities = [
    'Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Zrenjanin', 'Pančevo', 'Čačak', 'Novi Pazar', 'Kruševac',
    'Vranje', 'Šabac', 'Prizren', 'Prizren', 'Prokuplje', 'Smederevo', 'Jagnje', 'Svetozarevo', 'Pirot', 'Aleksinac',
    'Leskovac', 'Vranjska Banja', 'Sokobanja', 'Bor', 'Zvezdara', 'Voždovac', 'Čukarica', 'Makiš', 'Ovča', 'Trstenik',
    'Jagnje', 'Jagnje Brda', 'Ćuprija', 'Despotovac', 'Gornji Milanovac', 'Čačak', 'Svetozarevo', 'Užice', 'Čajetina', 'Zlatibor',
    'Kosjeric', 'Taor', 'Bogatica', 'Donja Drenova', 'Ribać', 'Lazarevac', 'Valjevo', 'Mionica', 'Osečina', 'Petrovo Selo',
    'Kumodraž', 'Resavo', 'Dositejevo', 'Žagubica', 'Malo Crniće', 'Malo Crniće', 'Govororama', 'Petrovac', 'Petrovac na Mlavi',
    'Kovin', 'Indija', 'Smederevska Palanka', 'Grocka', 'Kovin', 'Poreč', 'Poreč', 'Požarevac', 'Petrovgrad', 'Malo Orašje'
  ];
  return pick(cities);
}

function generateZip_Serbia() {
  // Serbian postal codes: 5 digits, ranges 11000-37000 approximately
  const bases = [11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 31, 32, 34, 36, 37];
  return pick(bases) + pad(rnd(0, 999), 3);
}

// ─── BELGIUM ─────────────────────────────────────────────────────────────────

function generatePhone_Belgium() {
  // Belgian mobile: +32 4XX XX XX XX
  const prefixes = ['470', '471', '474', '476', '477', '478', '479', '485', '486', '489', '495', '496', '498', '499'];
  const num = pad(rnd(0, 999999), 6);
  const p = pick(prefixes);
  return `${p[0]}${p.slice(1)}${num[0]}${num[1]}${num[2]}${num[3]}${num[4]}${num[5]}`;
}

const streetPrefixes_Belgium = ['Rue', 'Avenue', 'Boulevard', 'Chaussée', 'Allée', 'Impasse', 'Drève', 'Clos'];

const streetNouns_Belgium = {
  feminine: [
    'Forêt', 'Vallée', 'Prairie', 'Source', 'Fontaine',
    'Colline', 'Plaine', 'Rivière', 'Bruyère', 'Fougère',
    'Clairière', 'Lande', 'Dune', 'Falaise',
  ],
  masculine: [
    'Bois', 'Marais', 'Ruisseau', 'Moulin', 'Château',
    'Chêne', 'Saule', 'Hêtre', 'Peuplier', 'Frêne',
    'Érable', 'Tilleul', 'Genêt', 'Sureau',
  ],
};

const streetAdjectives_Belgium = {
  feminine: [
    'Verte', 'Dorée', 'Bleue', 'Blanche', 'Noire',
    'Grise', 'Fraîche', 'Sauvage', 'Profonde', 'Tranquille',
    'Lumineuse', 'Ombragée', 'Verdoyante', 'Paisible', 'Brumeuse',
    'Diaphane', 'Scintillante', 'Nacrée', 'Opaline', 'Soyeuse',
    'Murmurante', 'Effacée', 'Voilée', 'Miroitante', 'Vaporeuse',
  ],
  masculine: [
    'Vert', 'Doré', 'Bleu', 'Blanc', 'Noir',
    'Gris', 'Frais', 'Sauvage', 'Profond', 'Tranquille',
    'Lumineux', 'Ombragé', 'Verdoyant', 'Paisible', 'Brumeux',
    'Diaphane', 'Scintillant', 'Nacré', 'Opalin', 'Soyeux',
    'Murmurant', 'Effacé', 'Voilé', 'Miroitant', 'Vaporeux',
  ],
};

function generateAddress_Belgium() {
  const prefix = pick(streetPrefixes_Belgium);
  const gender = Math.random() < 0.5 ? 'feminine' : 'masculine';
  const conn   = gender === 'feminine' ? 'de la' : 'du';
  const noun   = pick(streetNouns_Belgium[gender]);
  const adj    = pick(streetAdjectives_Belgium[gender]);
  const number = Math.floor(Math.random() * 1000);
  return `${prefix} ${conn} ${noun} ${adj}, ${number}`;
}

function generateCity_Belgium() {
  const cities = [
    'Bruxelles', 'Anvers', 'Gand', 'Liège', 'Bruges', 'Namur', 'Mons', 'Leuven', 'Mechelen', 'Hasselt',
    'Turnhout', 'Louvain-la-Neuve', 'Charleroi', 'Arlon', 'Verviers', 'Eupen', 'Aubange', 'Bastogne', 'Ciney', 'Dinant',
    'Dour', 'Fleurus', 'Frameries', 'Gembloux', 'Hannut', 'Huy', 'Jodoigne', 'Lessines', 'Malines', 'Malmedy',
    'Marche-en-Famenne', 'Mons', 'Mouscron', 'Nivelles', 'Nivelles', 'Ottignies', 'Péruwelz', 'Prémontré', 'Quaregnon', 'La Roche-en-Ardenne',
    'Rochefortl', 'Ronse', 'Mons', 'Seraing', 'Soignies', 'Solesmes', 'Somme-Leuze', 'Spa', 'Tamise', 'Thuin',
    'Tirlemont', 'Tongre', 'Tongres', 'Tournai', 'Ypres', 'Visé', 'Waremme', 'Wavre', 'Wellin', 'Wépion'
  ];
  return pick(cities);
}

function generateZip_Belgium() {
  // Belgian postal codes: 4 digits, 1000–9999
  return String(rnd(1000, 9999));
}

// ─── BULGARIA ────────────────────────────────────────────────────────────────

function generatePhone_Bulgaria() {
  // Bulgarian mobile: +359 8X XXXXXXX
  const prefixes = ['087', '088', '089'];
  return pick(prefixes).slice(1) + pad(rnd(0, 9999999), 7);
}

const streetPrefixes_Bulgaria = ['ul.', 'bul.', 'pl.', 'zh.k.', 'por.', 'kv.'];

const streetNouns_Bulgaria = {
  feminine: [
    'Gora', 'Reka', 'Dolina', 'Planina', 'Polyana',
    'Livada', 'Mogila', 'Skala', 'Kanara', 'Voda',
    'Zemya', 'Niva', 'Gradina', 'Kraina',
  ],
  masculine: [
    'Bryag', 'Vruh', 'Kanal', 'Most', 'Bor',
    'Dab', 'Buk', 'Topol', 'Kamen', 'Greben',
    'Potok', 'Lug', 'Yavor', 'Brest',
  ],
};

const streetAdjectives_Bulgaria = {
  feminine: [
    'Zelena', 'Tiha', 'Byala', 'Cherna', 'Siva',
    'Sina', 'Divya', 'Nova', 'Starinna', 'Visoka',
    'Dalboka', 'Studena', 'Topla', 'Svetla', 'Tamna',
    'Mrazovita', 'Blyaskava', 'Prozrachna', 'Treperesta', 'Magliva',
    'Opalinova', 'Srebarna', 'Zlatna', 'Senkovita', 'Tihomirna',
  ],
  masculine: [
    'Zelen', 'Tih', 'Byal', 'Cheren', 'Siv',
    'Sin', 'Div', 'Nov', 'Starinen', 'Visok',
    'Dalbok', 'Studen', 'Topul', 'Svetul', 'Tamen',
    'Mrazovit', 'Blyaskav', 'Prozrachen', 'Treperest', 'Magliv',
    'Opalinov', 'Srebaren', 'Zlaten', 'Senkovit', 'Tihomiren',
  ],
};

function generateAddress_Bulgaria() {
  const prefix = pick(streetPrefixes_Bulgaria);
  const gender = Math.random() < 0.5 ? 'feminine' : 'masculine';
  const adj    = pick(streetAdjectives_Bulgaria[gender]);
  const noun   = pick(streetNouns_Bulgaria[gender]);
  const number = Math.floor(Math.random() * 1000);
  return `${prefix} ${adj} ${noun}, ${number}`;
}

function generateCity_Bulgaria() {
  const cities = [
    'Sofiya', 'Plovdiv', 'Varna', 'Burgas', 'Ruse', 'Stara Zagora', 'Pleven', 'Sliven', 'Dobrich', 'Shumen',
    'Yambol', 'Pazardzhik', 'Haskovo', 'Kyustendil', 'Lovech', 'Troyan', 'Samokov', 'Petrich', 'Gotse Delchev', 'Septemvri',
    'Peshtera', 'Momchilgrad', 'Bansko', 'Blagoevgrad', 'Kustendil', 'Radnevo', 'Saline', 'Pomorie', 'Sozopol', 'Nessebar',
    'Obzor', 'Byala', 'Kiten', 'Tsarevo', 'Primorsko', 'Ahtopol', 'Balchik', 'Albena', 'Obrochishte', 'Krapets',
    'Shabla', 'Tyulenovo', 'General Toshevo', 'Silistra', 'Tutrakan', 'Ismail', 'Durankulak', 'Kavarna', 'Ivanovo', 'Kaliakra',
    'Krapetovo', 'Bulgakov', 'Ostrov', 'Popovo', 'Razgrad', 'Loznitsa', 'Isperikh', 'Kubrat', 'Tervel', 'Kaolinovo',
    'Antonovo', 'Nedyalkovo', 'Nikolovo', 'Novi Pazar', 'Velingrad', 'Devin', 'Smolyan', 'Chepelare', 'Shiroka Laka', 'Banite',
    'Teshel', 'Pamporzhenets', 'Pasarelovo', 'Mursalitsa', 'Mugla', 'Leshten', 'Gela', 'Bachkovo', 'Asenovgrad', 'Madan',
    'Rudozem', 'Borino', 'Zlatograd', 'Ivaylovgrad', 'Krumovgrad', 'Ardino', 'Dzhebel', 'Madzhare', 'Kovachevo', 'Malko Tarnovo',
    'Sandanski', 'Bogdanovo', 'Dravograd', 'Dve Mogili', 'Dupnitsa', 'Emona', 'Filip', 'Firdos', 'Florina', 'Gavril',
    'Gigen', 'Gigintsi', 'Glushkovo', 'Godech', 'Gorna Lipnitsa', 'Gorna Mitkova', 'Gorni Bogrov', 'Gorni Chirpan', 'Gorski Izvor',
    'Gradezh', 'Grazhdansko', 'Gribnitsa', 'Gromovo', 'Grundy', 'Gulentsi', 'Gulubovo', 'Gumoshnitsa', 'Gunkovo', 'Gunovo',
    'Gurkovo', 'Gusla', 'Guster', 'Gustovtsa', 'Harsovo', 'Haskovo', 'Hebar', 'Heiberg', 'Heidenfeld', 'Heliokrasi',
    'Hendeva', 'Herceg', 'Herkovtsi', 'Heruvim', 'Hilendarski', 'Hlebarovo', 'Hlevnya', 'Hlidarevo', 'Hlyabevo', 'Hotsovo'
  ];
  return pick(cities);
}

function generateZip_Bulgaria() {
  // Bulgarian postal codes: 4 digits, 1000–9999
  return String(rnd(1000, 9999));
}

// ─── BRAZIL ──────────────────────────────────────────────────────────────────

function generatePhone_Brazil() {
  // Brazilian mobile: +55 (DDD) 9XXXX-XXXX
  const ddds = ['11', '12', '13', '21', '22', '31', '32', '41', '51', '61', '71', '81', '85', '91'];
  const num = pad(rnd(8600, 9999), 4) + pad(rnd(0, 9999), 4);
  return `(${pick(ddds)}) 9${num.slice(4)}-${num.slice(4)}`;
}

const streetPrefixes = ['Rua', 'Avenida', 'Travessa', 'Alameda', 'Beco', 'Largo', 'Viela', 'Passagem'];

const streetNouns = {
  feminine: [
    'Pedras', 'Nuvens', 'Brumas', 'Sombras', 'Raízes', 'Grotas',
    'Clareiras', 'Capoeiras', 'Várzeas', 'Serras', 'Areias',
    'Vertentes', 'Lagoas', 'Veredas',
  ],
  masculine: [
    'Ventos', 'Cipós', 'Galhos', 'Brejos', 'Morros', 'Barrancos',
    'Penhascos', 'Charcos', 'Ribeiros', 'Basaltos', 'Granitos',
    'Musgos', 'Líquens', 'Bambus',
  ],
};

const streetAdjectives = {
  feminine: [
    'Sussurrantes', 'Nevoentas', 'Translúcidas', 'Cintilantes',
    'Sibilantes', 'Diáfanas', 'Tremeluzentes', 'Umbrosas',
    'Evanescentes', 'Ondulantes', 'Crespas', 'Tênues',
    'Veladas', 'Opacas', 'Rasteiras', 'Difusas', 'Lúgubres',
    'Alvacentes', 'Cerúleas', 'Fulgentes', 'Níveas', 'Sombrias',
    'Penumbrosas', 'Alvadias', 'Etéreas', 'Esmaecidas', 'Opalinas',
  ],
  masculine: [
    'Sussurrantes', 'Nevoentos', 'Translúcidos', 'Cintilantes',
    'Sibilantes', 'Diáfanos', 'Tremeluzentes', 'Umbrios',
    'Evanescentes', 'Ondulantes', 'Crespos', 'Tênues',
    'Velados', 'Opacos', 'Rasteiros', 'Difusos', 'Lúgubres',
    'Alvacentes', 'Cerúleos', 'Fulgentes', 'Níveos', 'Sombrios',
    'Penumbrosos', 'Alvadios', 'Etéreos', 'Esmaecidos', 'Opalinos',
  ],
};

function generateAddress_Brazil() {
  const prefix  = pick(streetPrefixes);
  const gender  = Math.random() < 0.5 ? 'feminine' : 'masculine';
  const conn    = gender === 'feminine' ? 'das' : 'dos';
  const noun    = pick(streetNouns[gender]);
  const adj     = pick(streetAdjectives[gender]);
  const number  = Math.floor(Math.random() * 1000);
  return `${prefix} ${conn} ${noun} ${adj}, ${number}`;
}

function generateCity_Brazil() {
  const cities = [
    'Olinda', 'Florianópolis', 'Simão Dias', 'Volta Redonda', 'Araçatuba', 'Curitiba', 'Americana', 'Londrina', 'Chapecó',
	'Campos dos Goytacazes','Presidente Prudente', 'Mauá', 'Sete Lagoas', 'Pedrinhas', 'Caucaia', 'Baía da Traição', 'Cabedelo',
    'Lauro de Freitas', 'João Pessoa', 'Poço Verde', 'Belo Horizonte', 'Valença', 'Xique-Xique', 'Ilhéus', 'Angra dos Reis',
    'Propriá', 'Estância', 'Macaé', 'Cajazeiras', 'Salvador', 'Diadema', 'Barra do Piraí', 'Pindamonhangaba', 'Sobral',
    'Caetité', 'São Caetano do Sul', 'Itabaiana', 'Curaçá', 'Belém', 'Vitória', 'Juazeiro do Norte', 'Caxias do Sul', 'Anápolis',
    'Ferraz de Vasconcelos', 'Mossoró', 'Santo André', 'Arauá', 'São Bernardo do Campo', 'Limeira', 'Hortolândia', 'Maceió',
    'Três Rios', 'Uberaba', 'São Paulo', 'São Gonçalo', 'Brasília', 'Nova Iguaçu', 'Cachoeiro de Itapemirim', 'Duque de Caxias',
    'Cuiabá', 'Colatina', 'Antônio Carlos', 'Macaíba', 'Simões Filho', 'Mamanguape', 'Niterói', 'Brumado', 'Nova Friburgo',
    'Teresópolis', 'Jequié', 'Petrolina', 'Poços de Caldas', 'Cabo Frio', 'São Luís', 'Natal', 'Nossa Senhora do Socorro',
    'Viana', 'São Mateus', 'Jundiaí', 'Parnaíba', 'Barra Mansa', 'Aparecida de Goiânia', 'Patos', 'Paulo Afonso',
    'Maringá', 'Serra', 'Alagoinhas', 'Resende', 'Queimados', 'Euclides da Cunha', 'Itabuna', 'Santos', 'Laranjeiras',
    'São Cristóvão', 'Mogi das Cruzes', 'Nossa Senhora da Glória', 'Piracicaba', 'Itaquaquecetuba', 'Monteiro',
    'São João de Meriti', 'Irecê', 'Jacareí', 'Uberlândia', 'Tobias Barreto', 'Petrópolis', 'Itajaí', 'Guarabira',
    'Juazeiro', 'Fortaleza', 'Campina Grande', 'Sorocaba', 'Neópolis', 'Itajubá', 'Lavras', 'Lagarto', 'Vassouras',
    'Itaporanga', 'Barreiras', 'Livramento de Nossa Senhora', 'Suzano', 'Mesquita', 'Campinas', 'Pelotas', 'Guarapari',
    'Candeias', 'Paripiranga', 'Camaçari', 'Teresina', 'Sumaré', 'Cascavel', 'Montes Claros', 'Juiz de Fora',
    'Vitória da Conquista', 'Teófilo Otoni', 'Itaboraí', 'Pombal', 'Senhor do Bonfim', 'Porto Velho', 'Rosário do Catete',
    'Cristinápolis', 'Guarulhos', 'Bauru', 'Guanambi', 'Aracaju', 'Santa Maria', 'Ipatinga', 'Osasco', 'Vila Velha',
    'Campo Grande', 'Patos de Minas', 'Joinville', 'Linhares', 'Nilópolis', 'Goiânia', 'Indaiatuba', 'Barra dos Coqueiros',
    'Divinópolis', 'Governador Valadares', 'Macapá', 'Araxá', 'Japaratuba', 'Riachão do Dantas', 'Pouso Alegre', 'Capela',
    'Caruaru', 'Rio Tinto', 'Varginha', 'Boquim', 'Feira de Santana', 'Rio de Janeiro', 'São José dos Campos', 'Jacobina',
    'Belford Roxo', 'Ponta Grossa', 'Bayeux', 'Umbaúba', 'Sousa', 'Blumenau', 'Cariacica', 'Itabaianinha', 'Bom Jesus da Lapa',
    'Itaperuna', 'São José do Rio Preto', 'Foz do Iguaçu', 'Boa Vista', 'Recife', 'Porto Alegre', 'Santa Rita', 'Serrinha',
    'Palmas', 'Aracruz', 'Major Sales', 'Lucena', 'Rio Branco', 'Pacatuba', 'Jaboatão dos Guararapes', 'Guarapuava',
    'Marília', 'Taubaté', 'Cumbe', 'Manaus', 'Ribeirão Preto',
];
  return `${pick(cities)}`;
}

function generateZip_Brazil() {
  // Brazilian CEP: XXXXX-XXX
  return pad(rnd(1000, 99999), 5) + '-' + pad(rnd(0, 999), 3);
}

// ─── GREECE ──────────────────────────────────────────────────────────────────

function generatePhone_Greece() {
  // Greek mobile: +30 69X XXXXXXX
  const prefixes = ['690', '691', '692', '693', '694', '695', '696', '697', '698', '699'];
  return pick(prefixes) + pad(rnd(0, 9999999), 7);
}

const streetPrefixes_Greece = ['Odos', 'Leoforos', 'Plateia', 'Parodos', 'Stoa', 'Dromos'];

const streetNouns_Greece = {
  feminine: [
    'Dafnis', 'Elias', 'Limnis', 'Koiladas', 'Pigis',
    'Vrysi', 'Akris', 'Nisidas', 'Skias', 'Anemis',
    'Aspras', 'Galinis', 'Chrysis', 'Ammos',
  ],
  masculine: [
    'Dasous', 'Potamou', 'Vounou', 'Petrou', 'Pefkou',
    'Vrachou', 'Kolpou', 'Pyrgo', 'Kipos', 'Antrou',
    'Alsos', 'Anemou', 'Kastrou', 'Lofou',
  ],
};

const streetAdjectives_Greece = {
  feminine: [
    'Galanís', 'Prasínis', 'Lefkís', 'Maúris', 'Foteinis',
    'Skieras', 'Vathias', 'Makrias', 'Steinis', 'Agrias',
    'Thínas', 'Psylis', 'Chrysís', 'Argyrís', 'Kyánis',
    'Diafanís', 'Astrapís', 'Nephelís', 'Omichlís', 'Aithrias',
    'Galazías', 'Veloudínis', 'Kristallínis', 'Irisoénis', 'Arginís',
  ],
  masculine: [
    'Galanoú', 'Prasinoú', 'Lefkoú', 'Mauroú', 'Foteinoú',
    'Skieroú', 'Vatheoú', 'Makroú', 'Stenoú', 'Agrioú',
    'Thinoú', 'Ypsíloú', 'Chrysoú', 'Argyroú', 'Kyánou',
    'Diafanoú', 'Astrapinoú', 'Nephelinoú', 'Omichlíou', 'Aithrinoú',
    'Galazioú', 'Veloudínou', 'Kristallinoú', 'Irisoénou', 'Arginoú',
  ],
};

function generateAddress_Greece() {
  const prefix = pick(streetPrefixes_Greece);
  const gender = Math.random() < 0.5 ? 'feminine' : 'masculine';
  const noun   = pick(streetNouns_Greece[gender]);
  const adj    = pick(streetAdjectives_Greece[gender]);
  const number = Math.floor(Math.random() * 1000);
  return `${prefix} ${noun} ${adj}, ${number}`;
}

function generateCity_Greece() {
  const cities = [
    'Athina', 'Thessaloniki', 'Patra', 'Heraklio', 'Larisa', 'Volos', 'Ioannina', 'Chania', 'Rhodos', 'Kavala',
    'Agioi Anargyroi', 'Ag. Paraskevi', 'Agia Varvara', 'Aigilea', 'Airaos', 'Aivaliotis', 'Akrata', 'Aliartos',
    'Almyros', 'Alos Kalimniou', 'Anafero', 'Anavra', 'Anchialos', 'Andirrio', 'Andravida', 'Androusa', 'Andros',
    'Anemolivano', 'Anemomilos', 'Anemomylos', 'Aneta', 'Anezina', 'Anglisides', 'Angona', 'Ania', 'Animon',
    'Annabella', 'Anoia', 'Anoja', 'Anolemi', 'Anomeritissa', 'Anonisteri', 'Anonymi', 'Anorgia', 'Anoseli',
    'Anosmani', 'Anostelitsa', 'Anosykes', 'Anova', 'Anovos', 'Anoyska', 'Anza', 'Anzele', 'Apaidotos',
    'Apallonon', 'Apanemo', 'Aparitio', 'Aparnati', 'Aparnias', 'Aparpianitis', 'Apeftidia', 'Apefti', 'Aperiopi',
    'Aperonia', 'Apesia', 'Apesokorithi', 'Apetaleia', 'Apetalidon', 'Apetia', 'Apetikoto', 'Apetrela', 'Apetsous',
    'Apevo', 'Apezia', 'Apezina', 'Apezini', 'Apeziou', 'Aphantis', 'Aphantou', 'Apheleia', 'Apheleia Rodou',
    'Aphelia', 'Aphelina', 'Aphelina Thasou', 'Aphelineis', 'Apheliti', 'Apheliton', 'Aphelniton', 'Apheltio',
    'Apheltis', 'Aphen', 'Aphena', 'Aphentinada', 'Apheradi', 'Apherantis', 'Apherasoula', 'Apheratella',
    'Aphera kai Mavraneia', 'Apherathousa', 'Aphereion', 'Apherentis', 'Apheresi', 'Apherata', 'Apheratis',
    'Apheranitissa', 'Apheranitiski', 'Apherano', 'Apheranoi', 'Apheranthos', 'Apherasmata', 'Apherasoulia',
    'Aphereion Kalavriton', 'Aphereron', 'Apheredos', 'Aphereia', 'Apherenada', 'Apherentada', 'Apheric',
    'Apherika', 'Apherikeli', 'Apheriki', 'Apherikoneia', 'Apherikonnistra', 'Apherina', 'Apherinada',
    'Apherinika', 'Apheripoli', 'Apheripoli Achaiasi', 'Apherithas', 'Apheritis', 'Apheritissa', 'Apheritissia',
    'Apheritis Thasou', 'Apheritissa Evvias', 'Apheritopsaras', 'Apheritoupoli', 'Apheritos', 'Apheritou',
    'Apheritovia', 'Aphertilia', 'Aphertin', 'Aphertini', 'Aphertousa', 'Apheryni', 'Aphessanaia', 'Aphestria',
    'Aphestria Voiotias', 'Aphestria Fthiotidas', 'Apheta', 'Aphetalousa', 'Aphataloto', 'Aphete', 'Apheteiko',
    'Apheteikona', 'Apheteikos', 'Apheteia', 'Apheteia kai Nerantza', 'Aphetelia', 'Apheteligono', 'Aphetelinon',
    'Aphetelitha', 'Apheteliton', 'Aphetelivania', 'Apheten', 'Aphetena', 'Aphetenikion', 'Aphetenileia',
    'Aphetenikion Voiotias', 'Aphetenia', 'Apheteniako', 'Aphetenias', 'Aphetenion', 'Apheteniotis', 'Aphetenitisses',
    'Apheteno', 'Aphetenoudi', 'Aphetenos', 'Aphetenoussa', 'Aphetenos Korinthias', 'Aphetenousta', 'Aphetenousses',
    'Aphetenyti', 'Aphetereia', 'Apheteria', 'Apheteria Fthiotidon', 'Apheteria Fokidon', 'Apheteria Verrias',
    'Apheterida', 'Apheteridis', 'Apheteridissa', 'Apheteridissae', 'Apheteridon', 'Apheteridi', 'Apheteridiotis',
    'Apheterin', 'Apheterina', 'Apheterinaia', 'Apheterinakio', 'Apheterinakion', 'Apheterinakou', 'Apheterinania',
    'Apheterinanios', 'Apheterinannos', 'Apheterinanoulla', 'Apheterinapora', 'Apheterinara', 'Apheterinasos',
    'Apheterinatia', 'Apheterinati', 'Apheterinatika', 'Apheterinatsas', 'Apheterinaulos', 'Apheterinaulos',
    'Apheterineia', 'Apheterineo', 'Apheterineos', 'Apheterineo Megala', 'Apheterineou', 'Apheterines',
    'Apheterineusa', 'Apheterinika', 'Apheterinikon', 'Apheterinikou', 'Apheterinikous', 'Apheterinikes',
    'Apheteriniki', 'Apheterinikiaka', 'Apheterinikiako', 'Apheterinikiakos', 'Apheterinikiakou', 'Apheterinikiata',
    'Apheterinikiatai', 'Apheterinikiatas', 'Apheterinikin', 'Apheteriniki opsi', 'Apheterinikiosis', 'Apheterinikiotai',
    'Apheterinikon topikon dimotikon sholeion', 'Apheterinik ymnasion', 'Apheterinin', 'Apheteriniu', 'Apheterinius',
    'Apheterinio', 'Apheterinioi', 'Apheteriniu', 'Apheteriniusa', 'Apheteriniu Driftakion', 'Apheterinipolis',
    'Apheterinitai', 'Apheterinitakis', 'Apheterinitak', 'Apheterinitakos', 'Apheterinitakos', 'AphetheraPolitis',
    'Apheteritissa', 'Apheterouitta', 'Apherotissa', 'Apherotissa Doxas', 'Apherosi', 'Apherosio', 'Apherosiotis',
    'Apherosion', 'Apherosionikos', 'Apherosiotai', 'Apherosiou', 'Apherosiotis', 'Apherosiotissa', 'Apherosious',
    'Apherosious Evoias', 'Apherosita', 'Apherositas', 'Apherositis', 'Apherosokomi', 'Apherosomata', 'Apherosomero',
    'Apherosomires', 'Apherosomires Aliartikou', 'Apherosommata', 'Apherosoinion', 'Apherosoinitissa', 'Apherosomatistis'
  ];
  return pick(cities);
}

function generateZip_Greece() {
  // Greek postal codes: 5 digits, first 2 = region (10–85)
  const regionPrefixes = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
    '21', '22', '26', '30', '31', '38', '41', '45', '48', '49',
    '54', '55', '56', '57', '60', '62', '63', '67', '68', '69',
    '70', '71', '72', '73', '74', '81', '82', '83', '84', '85'];
  return pick(regionPrefixes) + pad(rnd(0, 999), 3);
}

//////////////////////////////////////////////////////////////////////////////////// Function to generate a CNP for Romania

function generateCNP_Romania() {
  const genderOptions = [
    { sex: 1, century: 1900 },
    { sex: 2, century: 1900 }
  ];

  const genderChoice = genderOptions[Math.floor(Math.random() * genderOptions.length)];
  const gender = genderChoice.sex;

  const birthYear = Math.floor(Math.random() * (1999 - 1930 + 1)) + 1930;
  const year = birthYear % 100;
  const birthCentury = 1900;

  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 31) + 1;

  if (!isValidDate(day, month, year, birthCentury)) {
    return generateCNP_Romania();
  }

  const yearStr = year.toString().padStart(2, '0');
  const monthStr = month.toString().padStart(2, '0');
  const dayStr = day.toString().padStart(2, '0');

  const validCountyCodes = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'
  ];

  const countyStr = validCountyCodes[Math.floor(Math.random() * validCountyCodes.length)];
  const sequentialCode = Math.floor(Math.random() * 999) + 1;
  const sequentialStr = sequentialCode.toString().padStart(3, '0');
  const partialCNP = `${gender}${yearStr}${monthStr}${dayStr}${countyStr}${sequentialStr}`;
  const checksum = calculateCNPChecksum(partialCNP);

  return `${partialCNP}${checksum}`;
}

function isValidDate(day, month, year, century) {
  const date = new Date(century + year, month - 1, day);
  return date.getFullYear() === (century + year) &&
         date.getMonth() === (month - 1) &&
         date.getDate() === day;
}

function calculateCNPChecksum(partialCNP) {
  const weights = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(partialCNP.charAt(i)) * weights[i];
  }
  const remainder = sum % 11;
  return (remainder === 10) ? 1 : remainder;
}

////////////////////////////////////////////////////////////////////////////// Function to generate PESEL for Poland
function generatePESEL_Poland() {
  const year = getRandomYearInRange(1930, 2005);
  const date = new Date(year, getRandomMonth() - 1, getRandomDay());
  const gender = Math.random() < 0.5 ? 'male' : 'female';

  let peselDate = formatDate(date);
  peselDate = adjustMonth(peselDate, getMonthAdjustment(year));

  const uniqueId = generateRandomDigits(3);
  const genderDigit = generateDigitForGender(gender);
  const peselWithoutChecksum = peselDate + uniqueId + genderDigit;
  const checksum = calculateControlDigit(peselWithoutChecksum);

  return peselWithoutChecksum + checksum;
}

function getRandomYearInRange(minYear, maxYear) {
  return Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
}

function getRandomMonth() {
  return Math.floor(Math.random() * 12) + 1;
}

function getRandomDay() {
  return Math.floor(Math.random() * 28) + 1;
}

function formatDate(date) {
  const yy = date.getFullYear().toString().slice(-2);
  const MM = ('0' + (date.getMonth() + 1)).slice(-2);
  const dd = ('0' + date.getDate()).slice(-2);
  return yy + MM + dd;
}

function adjustMonth(dateString, adjustment) {
  let year = parseInt(dateString.slice(0, 2), 10);
  let month = parseInt(dateString.slice(2, 4), 10);
  month += adjustment;
  if (month > 12) {
    year += Math.floor(month / 12);
    month = month % 12;
  }
  return ('0' + year).slice(-2) + ('0' + month).slice(-2) + dateString.slice(4);
}

function getMonthAdjustment(year) {
  if (year >= 2000 && year < 2100) return 20;
  if (year >= 2100 && year < 2200) return 40;
  if (year >= 2200 && year < 2300) return 60;
  if (year < 1900) return 80;
  return 0;
}

function generateRandomDigits(length) {
  let digits = '';
  for (let i = 0; i < length; i++) {
    digits += Math.floor(Math.random() * 10);
  }
  return digits;
}

function generateDigitForGender(gender) {
  const baseDigit = Math.floor(Math.random() * 5) * 2;
  return gender === 'male' ? baseDigit + 1 : baseDigit;
}

function calculateControlDigit(pesel) {
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const digits = pesel.split('').map(Number);
  const sum = digits.slice(0, 10).reduce((acc, digit, i) => acc + digit * weights[i], 0);
  const modulo = sum % 10;
  return (10 - modulo) % 10;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////// Function to generate JMBG for Serbia
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(startYear, endYear) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = getRandomInt(1, 31);
  let month = getRandomInt(1, 12);
  let year = getRandomInt(startYear, endYear);

  while (day > daysInMonth[month - 1] || (month === 2 && day === 29 && !isLeapYear(year))) {
    day = getRandomInt(1, daysInMonth[month - 1]);
  }

  return { day: day.toString().padStart(2, '0'), month: month.toString().padStart(2, '0'), year: (year % 1000).toString().padStart(3, '0') };
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getRandomSerbiaRegion() {
  const regions = ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'];
  return regions[getRandomInt(0, regions.length - 1)];
}

function calculateChecksum(baseJMBG) {
  const weights = [7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < baseJMBG.length; i++) {
    sum += parseInt(baseJMBG[i]) * weights[i % 6];
  }
  let m = 11 - (sum % 11);
  return (m === 10 || m === 11) ? '0' : m.toString();
}

function generateJMBG_Serbia() {
  const { day, month, year } = getRandomDate(1930, 2005);
  const region = getRandomSerbiaRegion();
  const BBB = getRandomInt(0, 999).toString().padStart(3, '0');

  const baseJMBG = `${day}${month}${year}${region}${BBB}`;
  const checksum = calculateChecksum(baseJMBG);

  return `${baseJMBG}${checksum}`;
}

///////////////////////////////////////////////////////////////////////////////// Function to generate NIN for Belgium
function generateNIN_Belgium() {
  function getRandomIntB(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomDateB() {
    const day = String(getRandomIntB(1, 28)).padStart(2, '0');
    const month = String(getRandomIntB(1, 12)).padStart(2, '0');
    const year = String(getRandomIntB(1930, 2005)).slice(-2);
    return `${year}.${month}.${day}`;
  }

  const dateStr = getRandomDateB();
  const sequentialNumber = String(getRandomIntB(0, 999)).padStart(3, '0');
  const isMale = getRandomIntB(0, 1) === 0;
  const finalSequentialNumber = isMale ? sequentialNumber : (parseInt(sequentialNumber) + 1).toString().padStart(3, '0');

  const controlNumber = dateStr.replace(/\./g, '') + finalSequentialNumber;
  const checkSum = 97 - (parseInt(controlNumber) % 97);
  const checkDigit = checkSum.toString().padStart(2, '0');

  return `${dateStr}-${finalSequentialNumber}.${checkDigit}`;
}

///////////////////////////////////////////////////////////////////////////////// Function to generate CPF for Brazil
function generateCPF_Brazil() {
  function getRandomIntC(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function calculateCheckDigit(digits, weights) {
    const sum = digits.reduce((acc, digit, index) => acc + digit * weights[index], 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  const baseDigits = Array.from({ length: 9 }, () => getRandomIntC(0, 9));
  const firstCheckDigit = calculateCheckDigit(baseDigits, [10, 9, 8, 7, 6, 5, 4, 3, 2]);
  const allDigits = [...baseDigits, firstCheckDigit];
  const secondCheckDigit = calculateCheckDigit(allDigits, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);

  const formattedBase = baseDigits.join('');
  return `${formattedBase.slice(0, 3)}.${formattedBase.slice(3, 6)}.${formattedBase.slice(6, 9)}-${firstCheckDigit}${secondCheckDigit}`;
}

//////////////////////////////////////////////////////////////////////////////////////
// Function to generate AFM (Tax Identification Number) for Greece
function generateAFM_Greece() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numLetters = Math.random() < 0.5 ? 1 : 2;
  let prefix = '';
  for (let i = 0; i < numLetters; i++) {
    prefix += letters[Math.floor(Math.random() * letters.length)];
  }
  const digits = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
  return `${prefix}${digits}`;
}

////////////////////////////////////////////////////////////////////////////////////////////////////// Function to generate EGN for Bulgaria
function generateEGN_Bulgaria() {
  const EGN_WEIGHTS = [2, 4, 8, 5, 10, 9, 7, 3, 6];

  function getRandomIntBG(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function isValidDateBG(day, month, year) {
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year &&
           date.getMonth() === (month - 1) &&
           date.getDate() === day;
  }

  function calculateEGNChecksum(egn) {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(egn.charAt(i)) * EGN_WEIGHTS[i];
    }
    let validChecksum = sum % 11;
    if (validChecksum === 10) validChecksum = 0;
    return validChecksum.toString();
  }

  let year = getRandomIntBG(1930, 2005);
  let twoDigitYear = year % 100;
  let month = getRandomIntBG(1, 12);
  let day = getRandomIntBG(1, new Date(year, month, 0).getDate());

  let region = getRandomIntBG(0, 999);
  region = String(region).padStart(3, '0');

  let sex = getRandomIntBG(1, 2);
  if (sex === 1 && region % 2 === 0) {
    region = String(parseInt(region) - 1).padStart(3, '0');
  } else if (sex === 2 && region % 2 !== 0) {
    region = String(parseInt(region) + 1).padStart(3, '0');
  }

  const egn = `${String(twoDigitYear).padStart(2, '0')}` +
              `${String(month).padStart(2, '0')}` +
              `${String(day).padStart(2, '0')}` +
              region;

  const checksum = calculateEGNChecksum(egn);
  return `${egn}${checksum}`;
}

function generatePassword() {
  const length = 12;
  const charsets = {
    lower:   "abcdefghijklmnopqrstuvwxyz",
    upper:   "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!@#$%&*?"
  };

  // Guarantee one char from each charset
  const passwordParts = Object.values(charsets).map(cs => randomChar(cs));

  const allCharset = Object.values(charsets).join("");
  while (passwordParts.length < length) {
    passwordParts.push(randomChar(allCharset));
  }

  // Fisher-Yates shuffle
  for (let i = passwordParts.length - 1; i > 0; i--) {
    const j = cryptoRandInt(i + 1);
    [passwordParts[i], passwordParts[j]] = [passwordParts[j], passwordParts[i]];
  }

  const password = passwordParts.join('');
  document.getElementById('generatedPassword').innerHTML = `<strong>Generated Password:</strong> <span id="passwordValue">${password}</span> <button class="btn-copy" onclick="copyToClipboard('${password}')">📋</button>`;
}

function cryptoRandInt(max) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
}

function randomChar(charset) {
  return charset[cryptoRandInt(charset.length)];
}
