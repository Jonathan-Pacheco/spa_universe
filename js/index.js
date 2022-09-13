import {Router} from "./router.js"

const router = new Router();
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')

router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();


const home = document.querySelector('#home')
const universe = document.querySelector('#universe')
const exploration = document.querySelector('#exploration')

home.addEventListener('click', function() {
  resetFontWeight()
  home.classList.add('bold')
})

universe.addEventListener('click', function() {
  resetFontWeight()
  universe.classList.add('bold')
})

exploration.addEventListener('click', function() {
  resetFontWeight()
  exploration.classList.add('bold')
})

function resetFontWeight() {
  home.classList.remove('bold')
  universe.classList.remove('bold')
  exploration.classList.remove('bold')
}

