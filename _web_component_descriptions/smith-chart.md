---
title: Smith Chart
github: web-component-smith-chart
codepen: RzRjaQ
order: 2
---

<div class="grid-x grid-margin-x">
    <div class="cell small-12 medium-4">
        <smith-chart id="smith-chart-demo" r="[0,0]" style="width: 100%"></smith-chart>
    </div>
    <div class="cell small-12 medium-8">
        A web component for displaying and selecting points on a <a href="https://en.wikipedia.org/wiki/Smith_chart">Smith chart</a>.
        Seen here is an instance of the web component itself (try clicking around!)
        A <a href="https://codepen.io/cemulate/pen/RzRjaQ">Codepen demo</a> is also available, and the component can be found <a href="https://www.npmjs.com/package/web-component-smith-chart">on npm</a>.
        Built with plain SVG and <a href="https://lit-element.polymer-project.org/">lit-element</a>.
        <p>
            The currently selected point is: <br>
            <strong>r = </strong><span id="smith-chart-demo-r" style="font-family: monospace; font-size: 1.03rem"></span><br>
            <strong>z = </strong><span id="smith-chart-demo-z" style="font-family: monospace; font-size: 1.03rem"></span>
        </p>
    </div>
</div>

<script type="text/javascript">
const chart = document.getElementById('smith-chart-demo');
const tz = document.getElementById('smith-chart-demo-z');
const tr = document.getElementById('smith-chart-demo-r');
const cutoff = s => parseFloat(s).toFixed(2);
function displayValues() {
    const [ r, z ] = [ chart.r, chart.z ];
    tr.innerHTML = r == null ? '...' : `${ cutoff(r[0]) } + ${ cutoff(r[1]) }i`;
    tz.innerHTML = z == null ? '...' : `${ cutoff(z[0]) } + ${ cutoff(z[1]) }i`;
}
displayValues();
chart.addEventListener('change', displayValues);
</script>