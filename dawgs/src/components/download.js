document.getElementById("dload").onclick = function () {
  var l = document.createElement("a");
  l.href =
    "data:text/plain;charset=UTF-8," +
    document.getElementById("dload-txt").value;
  l.setAttribute("download", document.getElementById("dload-fn").value);
  l.click();
};
