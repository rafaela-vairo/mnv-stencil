import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-card',
	styleUrl: 'mnv-card.scss',
	shadow: true,
})
export class MnvCard {
	@Prop({ reflect: true }) overline: any
	@Prop() cardtitle: any
	@Prop() subtitle: any
	@Prop() button: string
	@Prop() link: string = 'http://google.com'
	@Prop() width: number

	render() {
		return (
			<div class='card-root' style={{ width: `${this.width}px` }}>
				<div class='header'>
					<mnv-title level='h5' overline={this.overline}>
						{this.cardtitle}
					</mnv-title>
					<mnv-subtitle type='one'>{this.subtitle}</mnv-subtitle>
					<mnv-divider />
				</div>
				<div class='body'>
					<mnv-paragraph>
						<slot />
					</mnv-paragraph>
				</div>
				<div class='action'>
					<form action={this.link}>
						<mnv-button marginzero contained full type='submit'>
							{this.button}
						</mnv-button>
					</form>
				</div>
			</div>
		)
	}
}
