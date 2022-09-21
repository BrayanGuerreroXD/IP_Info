const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed249dce58msh02539d0621d96f4p158270jsn60f63d5cbaed',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {
    return fetch('https://ip-geo-location.p.rapidapi.com/${ip}', options)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

