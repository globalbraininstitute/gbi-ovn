animate = function() {
 d3.select(this).transition().duration(1500)
   .attr("fill", "red");
}    
animateback = function() {
 d3.select(this).transition().duration(1)
   .attr("fill", "white");
}

</script>

<script>
var counter=0;
document.onkeypress=function(e) {
    if(e.which == 13) {
        counter++;
        switch (counter) {
        case 1:
          d3.select("#circle56").transition().duration(1000)
              .attr("fill", "white").each("end", animate);
          break;
        case 2:
          d3.select("#circle50").transition().duration(1000)
              .attr("fill", "white").each("end", animate);
          break;
        case 3:
          d3.select("#circle44").transition().duration(1000)
              .attr("fill", "white").each("end", animate);
          break;
        case 4:
          d3.select("#circle50").transition().duration(1000)
              .attr("fill", "red").each("end", animateback);
          d3.select("#circle50").transition().duration(1000)
              .attr("fill", "white").each("end", animate);
          break;
        case 5:
          d3.select("#circle38").transition().duration(1000)
              .attr("fill", "white").each("end", animate);
          break;
        case 6:
            d3.select("#circle50").transition().duration(1000)
              .attr("fill", "red").each("end", animateback);
            d3.select("#circle50").transition().duration(1000)
              .attr("fill", "white").each("end", animate);
          break;
        case 7:
            d3.select("#circle56").transition().duration(1000)
              .attr("fill", "red").each("end", animateback);
            d3.select("#circle56").transition().duration(1000)
              .attr("fill", "white").each("end", animate);
          break;
        case 8:
            d3.select("#circle32").transition().duration(1000)
              .attr("fill", "white").each("end", animate);
          break;
        case 9:
            d3.select("#circle56-9").transition().duration(1000)
              .attr("fill", "white").each("end", animate);
          break;


        default:
          //Statements executed when none of the values match the value of the expression
          break;
      }
    }
};

