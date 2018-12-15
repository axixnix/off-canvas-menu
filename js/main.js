// START EDITING YOUR JAVASCRIPT HERE
// ===============
const button = document.querySelector('.menu-button')

button.addEventListener('click', push)

function push (e) {
  const bodyClass = document.body.classList
  if (bodyClass.contains('offsite-is-open')) {
    bodyClass.remove('offsite-is-open')
  }else {bodyClass.add('offsite-is-open')}
}

/**alternatively
 * button.addEventlistener('click',e => document.body.classList.toggle('offsite-is-open'))
 */
