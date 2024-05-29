import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
// import { Tooltip, Toast, Popover } from 'bootstrap'
import factoryBootstrap from './bootstrap'

const $d = document
const $content = $d.querySelector('#content .row')
const $title = $d.getElementById('title')
const placeholders = ['', '', '', '', '', ''].map(e => factoryBootstrap.createPlaceholder())

const handleFetch = async () => {
  try {
    const response = (await fetch('products.json')).json()
    return response
  } catch (error) {
    console.error(error)
  }
}

const createProducts = (products) => {
  return products
    .map(({ image, name, description, price, category, mark, available }) => factoryBootstrap.createCard(image, name, description, price, category, mark, available))
    .join(' ')
}

$d.addEventListener('DOMContentLoaded', () => {
  $title.classList.add('active')
  $content.append(...placeholders)

  handleFetch()
    .then(response => {
      const data = createProducts(response)
      // $content.innerHTML = data
      setTimeout(()  => {
        $content.innerHTML = data
      }, 400)
    })
})
