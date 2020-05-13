const fetch = require('isomorphic-fetch')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

exports.isWebMonetized = (url) => {
  url = url.trim().indexOf('https://') === -1 ? (url.trim().indexOf('http://') === -1 ? 'https://' + url : url) : url
  const payload = {
    monetized: false,
    url
  }
  let URI = {}
  return new Promise((resolve, reject) => {
    (async () => {
      try { URI = new URL(url) } catch (e) { return reject(e) }
      if (!URI.host) return reject(new Error('No Available Host'))

      const results = await fetch(URI.href).then(res => res.text()).catch(e => reject(e))
      const virtualConsole = new jsdom.VirtualConsole()
      const dom = new JSDOM(results, { virtualConsole })
      const monetizationMeta = dom.window.document.querySelector('meta[name="monetization"]')

      payload.url = URI.href
      payload.monetized = !!monetizationMeta
      payload.content = monetizationMeta ? monetizationMeta.content : ''

      resolve(payload)
    })()
  })
}
