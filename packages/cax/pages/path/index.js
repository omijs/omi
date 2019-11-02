import { html, renderSVG } from '../../cax/cax'

Page({
  onLoad: function (options) {

    renderSVG(html`
    <svg width="200" height="200">
      <g x="-50" y='-50'>
        <path onclick=${this.tapHandler} width="100" height="100" d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
          style="stroke:#ff0000; fill: #ff0000" />
      </g>
    </svg>`, 'svg-a', this)


    renderSVG(html`
<svg width="200" height="200">
  <g x="-50" y='-50'>
    <path onclick=${this.tapHandler} width="100" height="100" d="M512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
      style="stroke:#ff0000; fill: #ff0000" />
  </g>
</svg>`, 'svg-b', this)

    const svg = renderSVG(html`
<svg width="200" height="200">
  <pasition duration="200" onclick=${this.changePath} width="100" height="100" from="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
    to="M49.1 23.5H2.1C0.9 23.5 0 24.5 0 25.6s0.9 2.1 2.1 2.1h47c1.1 0 2.1-0.9 2.1-2.1C51.2 24.5 50.3 23.5 49.1 23.5zM49.1 7.8H2.1C0.9 7.8 0 8.8 0 9.9c0 1.1 0.9 2.1 2.1 2.1h47c1.1 0 2.1-0.9 2.1-2.1C51.2 8.8 50.3 7.8 49.1 7.8zM49.1 39.2H2.1C0.9 39.2 0 40.1 0 41.3s0.9 2.1 2.1 2.1h47c1.1 0 2.1-0.9 2.1-2.1S50.3 39.2 49.1 39.2z"
    from-stroke="red" to-stroke="green" from-fill="blue" to-fill="red" stroke-width="2" />
</svg>`, 'svg-c', this)

    this.pasitionElement = svg.children[0]

    svg.scale = 0.5

    svg.stage.update()



    const svgD = renderSVG(html`
<svg width="200" height="200">
  <pasition duration="200" onclick=${this.changePathD} width="100" height="100" from="M184 100c-32 20-64 60-84 100-20-40-52-80-84-100 32-20 64-60 84-100 20 40 52 80 84 100z"
    to="M200 130c0 48-56 56-84 36 0 24 0 32 12 44-16-4-40-4-56 0 12-12 12-20 12-44-28 20-84 12-84-36 0-48 60-84 100-120 40 36 100 72 100 120z"
    from-stroke="#ccc" to-stroke="#888" from-fill="red" to-fill="black" stroke-width="4" />
</svg>`, 'svg-d', this)


    this.pkEle = svgD.children[0]

    svgD.scale = 0.5

    svgD.stage.update()
  },

  changePath: function () {
    this.pasitionElement.toggle()
  },
  changePathD: function () {
    this.pkEle.toggle()
  },


  tapHandler: function () {
    console.log(this)
  }
})
