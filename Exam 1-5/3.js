async function getCountry() {
  const country = [
    { name: "Thailand", abbr: "th", remark: "", regionId: 1 },
    { name: "Singapore", abbr: "sg", remark: "This is sg", regionId: 1 },
    {
      name: "South Georgia and the South Sandwich Islands",
      abbr: "gs",
      remark: "",
      regionId: 2,
    },
    { name: "Lao", abbr: "la", remark: "", regionId: 1 },
    { name: "United State", abbr: "US", remark: "", regionId: 7 },
  ];
  return country;
}
async function getRegion() {
  const region = [
    { id: 1, name: "Asia" },
    { id: 2, name: "South America" },
    { id: 7, name: "North America" },
  ];
  return region;
}
async function getResult() {
  const result = {};
  const c = await getCountry();
  const r = await getRegion();
  for (i = 0; i < c.length; i++) {
    for (j = 0; j < r.length; j++) {
      if (c[i].regionId == r[j].id) {
        result[c[i].abbr.toUpperCase()] = r[j].name;
      }
    }
  }
  console.log(result);
  return result;
}
getResult();
