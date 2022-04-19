let text =
  '{"cons":[' +
  '{"id":"c.","n":1,"m":99 },' +
  '{"id":"d.","n":446,"m":779 },' +
  '{"id":"e.","n":3,"m":1099 },' +
  '{"id":"f.","n":34,"m":1000000 }]}';
const obj = JSON.parse(text);
for (i = 0; i < obj.cons.length; i++) {
  ans = obj.cons[i].n;
  for (j = obj.cons[i].n; j < obj.cons[i].m; j++) {
    ans = ans + (j + 1);
  }
  console.log("Result " + obj.cons[i].id + " is " + ans.toLocaleString());
}
