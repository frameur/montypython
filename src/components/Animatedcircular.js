import { useEffect } from 'react'
import img1 from '../assets/images/ericidle.jpg'
import img2 from '../assets/images/johncleese.webp'
import img3 from '../assets/images/michaelpalin.jpeg'
import img4 from '../assets/images/terryjones.jpg'
import img5 from '../assets/images/terrygilliam.jpg'
import img6 from '../assets/images/grahamchapman.jpg'
import img7 from '../assets/images/ericidle2.jpg'
import img8 from '../assets/images/johncleese2.jpg'
import img9 from '../assets/images/michaelpalin2.jpg'
import img10 from '../assets/images/terryjones2.jpg'
import img11 from '../assets/images/terrygilliam2.jpeg'
import img12 from '../assets/images/grahamchapman2.jpg'

const Animatedcircular = () => {
  useEffect(() => {
    let imgBx = document.querySelectorAll('.imgBx')
    let contentBx = document.querySelectorAll('.contentBx')

    for (let i = 0; i < imgBx.length; i++) {
      imgBx[i].addEventListener('click', function () {
        for (let i = 0; i < contentBx.length; i++) {
          contentBx[i].className = 'contentBx'
        }
        document.getElementById(this.dataset.id).className = 'contentBx active'

        for (let i = 0; i < imgBx.length; i++) {
          imgBx[i].className = 'imgBx'
        }
        this.className = 'imgBx active'
      })
    }
  }, [])
  return (
    <div>
      <div className="containercircular">
        <div className="icon">
          <div className="imgBx active" style={{ '--i': 1 }} data-id="content1">
            <img src={img1} alt="team monty python" />
          </div>
          <div className="imgBx" style={{ '--i': 2 }} data-id="content2">
            <img src={img2} alt="team monty python" />
          </div>
          <div className="imgBx" style={{ '--i': 3 }} data-id="content3">
            <img src={img3} alt="team monty python" />
          </div>
          <div className="imgBx" style={{ '--i': 4 }} data-id="content4">
            <img src={img4} alt="team monty python" />
          </div>
          <div className="imgBx" style={{ '--i': 5 }} data-id="content5">
            <img src={img5} alt="team monty python" />
          </div>
          <div className="imgBx" style={{ '--i': 6 }} data-id="content6">
            <img src={img6} alt="team monty python" />
          </div>
        </div>
        <div className="contentcircular">
          <div className="contentBx active" id="content1">
            <div className="card">
              <div className="imgBx">
                <img src={img7} alt="team monty python" />
              </div>
              <div className="textBx">
                <h2>eric idle</h2>
                <br />
                <span>
                  born 29 March 1943 <br />
                  South Shields, United Kingdom
                </span>
              </div>
            </div>
          </div>
          <div className="contentBx" id="content2">
            <div className="card">
              <div className="imgBx">
                <img src={img8} alt="team monty python" />
              </div>
              <div className="textBx">
                <h2>john cleese </h2>
                <br />
                <span>
                  Born: October 27 1939 <br />
                  Weston-super-Mare, United Kingdom
                </span>
              </div>
            </div>
          </div>
          <div className="contentBx" id="content3">
            <div className="card">
              <div className="imgBx">
                <img src={img9} alt="team monty python" />
              </div>
              <div className="textBx">
                <h2>michael palin</h2>
                <br />
                <span>
                  Born: May 5 1943 <br />
                  Ranmoor, Sheffield, United Kingdom
                </span>
              </div>
            </div>
          </div>
          <div className="contentBx" id="content4">
            <div className="card">
              <div className="imgBx">
                <img src={img10} alt="team monty python" />
              </div>
              <div className="textBx">
                <h2>terry jones</h2>
                <br />
                <span>
                  Born: February 1 1942 <br />
                  Colwyn Bay, United Kingdom <br />
                  Died: January 21 2020 <br />
                  Highgate, London, United Kingdom
                </span>
              </div>
            </div>
          </div>
          <div className="contentBx" id="content5">
            <div className="card">
              <div className="imgBx">
                <img src={img11} alt="team monty python" />
              </div>
              <div className="textBx">
                <h2>terry gilliam</h2>
                <br />
                <span>
                  Born: November 22 1940 <br />
                  Minneapolis, Minnesota, United States
                </span>
              </div>
            </div>
          </div>
          <div className="contentBx" id="content6">
            <div className="card">
              <div className="imgBx">
                <img src={img12} alt="team monty python" />
              </div>
              <div className="textBx">
                <h2>graham chapman</h2>
                <br />
                <span>
                  Born: January 8 1941 <br />
                  Stoneygate, Leicester, United Kingdom <br />
                  Died: October 4 1989 <br />
                  Maidstone, United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Animatedcircular
