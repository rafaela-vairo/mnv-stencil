import Axios from 'axios'

const config = Axios.create({
	baseURL: 'https://sust-dev.olimpo.tic.ufrj.br/wp-json/',
})

export default config
