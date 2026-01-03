self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("kharch").then(c=>c.addAll([
      "./","index.html","style.css","app.js","lang.js"
    ]))
  );
});
