const countryConfigs = [
  {
    id: "uae",
    name: "United Arab Emirates (UAE)",
    shortName: "UAE",
    folder: "DUBAI",
    flag: "/images/clients/flags/ae.svg",
  },
  {
    id: "qatar",
    name: "Qatar",
    shortName: "Qatar",
    folder: "QATAR",
    flag: "/images/clients/flags/qa.svg",
  },
  {
    id: "oman",
    name: "Oman",
    shortName: "Oman",
    folder: "OMAN",
    flag: "/images/clients/flags/om.svg",
  },
  {
    id: "bahrain",
    name: "Bahrain",
    shortName: "Bahrain",
    folder: "BAHARAIN",
    flag: "/images/clients/flags/bh.svg",
  },
  {
    id: "kuwait",
    name: "Kuwait",
    shortName: "Kuwait",
    folder: "KUWAIT",
    flag: "/images/clients/flags/kw.svg",
  },
  {
    id: "russia",
    name: "Russia",
    shortName: "Russia",
    folder: "RUUSIA",
    flag: "/images/clients/flags/ru.svg",
  },
  {
    id: "turkey",
    name: "Turkey",
    shortName: "Turkey",
    folder: "TURKEY",
    flag: null,
  },
];

const rawLogoSets = {
  BAHARAIN: ["BAPCD COMPANY.png", "NASS COMPANY.png", "almoayyed COMPANY.png"],
  DUBAI: [
    "AL NABOODAH COMPANY.png",
    "AL NAJMA COMAPNY.png",
    "AL SHALE COMPANY.png",
    "AROMA COMPANY.png",
    "ASGC COMPANY.png",
    "DANUBE COMPANY.png",
    "DESERT GROUP COMPANY.png",
    "EFS COMPANY.png",
    "EMRILL COMPANY.png",
    "FARNEK COMPANY.png",
    "FSG COMPANY.png",
    "SHOBA COMPANY.png",
    "TRANSGUARD COMPANY.png",
    "UNEC COMPANY.png",
    "WE ONE COMPANY.png",
  ],
  KUWAIT: [
    "EBAA.png",
    "KFH.png",
    "KUWAIT KANAT CO.png",
    "KUWAIT OIL COMAPNY.png",
  ],
  OMAN: [
    "AL ADRAK COMPANY.png",
    "BAHWAN COMPANY.png",
    "GALFAR ENGINEERING & CONTRACTING COMPANY.png",
    "LARSEN & TOUBRO COMPANY.png",
    "sarooj construction company.png",
  ],
  QATAR: [
    "AL MANA COMAPNY.png",
    "BLACK CAT COMPANY.png",
    "GULF CONTRACTING COMPANY.png",
    "HCC COMPANY COMPANY.png",
    "MIDMAC CONTRACTING COMPANY.png",
    "QATAR BUILDIG COMPANY.png",
  ],
  RUUSIA: [
    "AKKOND COMPANY.png",
    "DOBROFLOT GROUP COMPANY.png",
    "GLORIA COMPAN.png",
    "KDV GROUP COMPANY.png",
    "KONTI COMPANY.png",
    "RFC COMPANY.png",
  ],
  TURKEY: [
    "BANVIT COMPANY.png",
    "ERPILIC COMAPNY.png",
    "ETI  COMPANY.png",
    "LC WAIKIKI COMPANY.png",
    "LEZITA COMPANY.png",
    "PELIT COMAPNY.png",
    "SOLEN COMAPNY.png",
    "TAHA GROUP COMPANY.png",
  ],
};

function formatDisplayName(fileName) {
  const withoutExtension = fileName.replace(/\.[^/.]+$/, "");
  const withoutSuffix = withoutExtension.replace(
    /(?:\s+|^)(?:COMPANY|COMAPNY|COMPAN)(?:\s+(?:COMPANY|COMAPNY|COMPAN))?\s*$/i,
    "",
  );

  return withoutSuffix
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((part) => {
      if (!part) return "";
      if (part === "AL") return "Al";
      if (/^[A-Z0-9&]+$/.test(part) && part.length <= 4) return part;
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join(" ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function buildLogoEntry(folder, fileName) {
  const displayName = formatDisplayName(fileName);
  const publicPath = `/images/clients/company-logos/${folder}/${encodeURIComponent(fileName)}`;

  return {
    id: `${folder}-${fileName}`,
    name: displayName,
    src: publicPath,
    alt: `${displayName} company logo`,
  };
}

export const clientCountries = countryConfigs.map((country) => {
  const logos = (rawLogoSets[country.folder] || []).map((fileName) =>
    buildLogoEntry(country.folder, fileName),
  );

  return {
    ...country,
    logoCount: logos.length,
    logos,
  };
});

export const clientCountryMap = Object.fromEntries(
  clientCountries.map((country) => [country.id, country]),
);

export const allClientCountries = clientCountries;
