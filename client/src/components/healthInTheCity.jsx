import React, { Component } from 'react';
import TweenLite, { TimelineLite } from 'gsap';
import Navbar from './navbar';
import Popup from 'reactjs-popup';
import powerVsEffect from '../images/powerVsEffect.png';
import vgcc from '../images/VGCC.jpg';
import vggcPathways from '../images/vggcPathways.png';
import drugs from '../images/drugs.png';
import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	VerticalBarSeries,
	VerticalBarSeriesCanvas,
	LabelSeries,
	ChartLabel,
} from 'react-vis';
// import { Power0 } from 'gsap/all';
// import { Button, View, Text } from 'react-native';

class Health extends Component {
	constructor() {
		super();
		this.myTween = new TimelineLite({ paused: true });
		this.myElements = [];
		this.state = {
			activeSlide: ['homeSlide slide1', 'bottom homeSlide slide1'],
			slideMax: 3,
			slideMin: 1,
			xPos: null,
			yPos: null,
		};
	}

	// componentDidMount() {

	// }

	render() {
		return (
			<div className="bcg">
				<div
					className="hero"
					ref={ref => (this.myElements['hero'] = ref)}
					onMouseMove={e => {
						this.setState({ yPos: e.clientY / window.innerHeight - 0.5 });
						this.setState({ xPos: e.clientX / window.innerHeight - 0.5 });
						var normalizedDistance =
							1 -
							Math.sqrt(Math.pow(this.state.xPos + 0.4, 2) + Math.pow(this.state.yPos - 0.4, 2)) / 0.8544;
						// TweenLite.to(this.myElements['navbar'], 0.2, { autoAlpha: normalizedDistance , y:`${-normalizedDistance*5}`});
						// Tilt the hero container
						TweenLite.to(this.myElements['hero'], 0.6, {
							rotationY: 3 * this.state.xPos,
							rotationX: 3 * this.state.yPos,
							ease: 'Power1.easeOut',
							transformPerspective: 900,
							transformOrigin: 'center',
						});
					}}
				>
					<Navbar ref={ref => (this.myElements['navbar'] = ref)} />
					{this.Box()}
				</div>
			</div>
		);
	}

	Box() {
		const width = window.innerWidth * 0.8,
			height = window.innerHeight * (-this.state.yPos + 0.5);
			console.log(height, window.innerHeight, this.state.yPos)
		const popupStyle = { width: `${width}px`, height: `${height}px`, margin: '5px' },
			positions = [
				'bottom center',
				'top left',
				'top right',
				'center center',
				'bottom right',
				'bottom left',

				'right center',
				'left center',
				'top center',
			];
		return (
			<div className="top-bottom" ref={ref => (this.myElements['top-bottom'] = ref)}>
				<div className="text" ref={ref => (this.myElements['text'] = ref)}>
					<p className="blog-p">
						<h2>Health in the City</h2>
						<br />
						<h3>A personal journey.</h3>
						<strong>Note:</strong> Hover over the [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S0006322304010066">R</a>
							}
							positions={positions}
							on="hover"
						>
							<p classname="readme">
								<h3>I am a useful popup.</h3>
							</p>
						</Popup>
						] to see a preview of the scientific articles referenced there.
						<br />
						<strong>Note:</strong> The following is a work in progress. This is the kind article that is better read slow;
						and if needed not finished, rather than skimmed. Read a little and come back later. There is so
						much information out there that is so valuable us. I have collected only a small portion of that
						here, with links for reference and further inquiry. I highly encourage treating this as a
						doorway to that much bigger world, that is made freely available to us. Come back to this when
						you have some time, and click on the links scattered throughout. <br />
						<br />
						<h3>How it all started</h3>
						I moved to San Francisco from the suburbs of Sacramento. Where I previously enjoyed plenty of
						sunshine and outdoor activities. I swam, played softball, and savored days at the lake and
						river. San Francisco is a different world. It’s cold. And so fast paced. I found myself inside
						all the time, sitting, commuting and working. Now are the days of artificial lighting, little
						movement, and quick, easy food. This was a recipe for disaster for me. It started with
						headaches. All the time. I was also always dehydrated, fatigued yet sleepless. Then came weight
						loss, hair loss and more. These experiences inevitably lead me down a path of education about
						what the heck was happening to me, how my body works, what it needs, and what environment I find
						myself in. I am ultimately grateful for this necessity of physical self discovery. Not just
						because it’s something that is needed in my own life, but because the subtle and not so subtle
						changes in our environment, diet, pharmacopeia, and behavior, have extensive effects on our
						health, happiness and even personality. So below are some of the things I’ve implemented in my
						life, to be healthy in a place like San Francisco. <br />
						<br />
						<h3>It’s not all in your head</h3>
						This is a view I used to hold on most physical and mental problems. “Health starts from a state
						of mind”, was a truth of mine that is now much more nuanced. This is the result of my stabilized
						emotional state after adopting a keto diet [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S0006322304010066">R</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S0006322304010066"
							/>
						</Popup>
						], and taking magnesium [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/abs/pii/S1734114013710326">R</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/abs/pii/S1734114013710326"
							/>
						</Popup>
						]. Something that struck me from the book Deep Nutrition was that when you look at a gazelle, or
						zebra, or giraffe, they’re all beautiful. You don’t find giraffes that are fat, or in fun
						choose-your-own-adventure sizes and shapes like you do in the human race. Beauty in any species,
						including humanity, is not a genetic lottery you have to be lucky to win. Beauty is mathematical
						adherence to the perfection of eons of evolution. It’s not supposed to be rare. So when the rise
						in industrialized fats like veggie oil and margarine started causing cellular protein
						malfunctioning [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/27215959">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/27215959" />
						</Popup>
						], or the rise in electromagnetic radiation caused all kinds of physical [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jcmm.12088">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://onlinelibrary.wiley.com/doi/full/10.1111/jcmm.12088"
							/>
						</Popup>
						] and mental [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S0048969708004634">R</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S0048969708004634"
							/>
						</Popup>
						] issues, or our cultures lack of sun exposure’s effect on neurodegenerative diseases [
						<a href="https://ehjournal.biomedcentral.com/articles/10.1186/1476-069X-8-34">R</a>,{' '}
						<a href="https://jamanetwork.com/journals/jamaneurology/article-abstract/796288">R</a>,{' '}
						<a href="https://www.mdpi.com/2072-6643/8/3/142">R</a>
						], its essential for us to upgrade our mental framework on what healthy is, and where to look
						when health fails.
						<br />
						<br />
						We, as social and cerebral animals, tend to fall back on the idea that when we feel bad, it must
						be because of a problem with a personal relationship, or a way of thinking. It reminds me of a
						zen story. A man was searching under a street lamp on a dark street for his keys. Someone walks
						up to him and asks “what are you doing?”. “I’m looking for my keys” says the man. “Oh okay, let
						me help you, where did you drop them?”. The man points to dark alley down the street and says
						“over there”. “Why are you looking over here then?”, “because this is where the light is”. The
						unseen things that silently prop up our health don’t need to be thought of. So the thinking
						brain spends its time on what is expedient. But because those silent props, like the abundance
						of magnesium in food, water and salt are gone, we require a reorientation of what is expedient.
						Not just for our health, as magnesium is essential for over 300 biological processes in the
						human body, but for the health of our ecosystem that once silently supported us. Magnesium is
						unavailable because of mono farming, soil depletion, and salt industrial processing to separate
						NaCl for table salt, and the rest for electrolyte drinks. It is a problem for you who needs
						magnesium and isn’t getting it, and its a problem for life as we know it, who’s rapidly changing
						environment is undermining the health of us all.
						<br />
						<br />
						<h3>Health effects of Electromagnetic Radiation (EMFs)</h3>
						If you’re like me, the term EMF may be new to you. Or you may know what it is, but doubt that
						EMF radiation like cell phone signals, or home electrical or magnetic fields have any effect.
						They do. So I’ve dedicated this section to a published articles dump, attesting to that. Feel
						free to peruse.
						<br />
						The EMFs found in homes, cell phones and wifi devices can damage DNA [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18661381?dopt=Abstract">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/18661381?dopt=Abstract"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/17456027?dopt=Abstract">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/17456027?dopt=Abstract"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18367817?dopt=Abstract">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/18367817?dopt=Abstract"
							/>
						</Popup>
						], cause neuro-degeneration like autism [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/abs/pii/S0736574814000926">R</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/abs/pii/S0736574814000926"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S0928468013000370">R</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S0928468013000370"
							/>
						</Popup>
						], infertility and lowered sperm count [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="http://researcharchive.lincoln.ac.nz/handle/10182/4002">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="http://researcharchive.lincoln.ac.nz/handle/10182/4002" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							positions={positions}
							trigger={
								<a href="https://search.proquest.com/openview/aadcafe07e0ddcd8b344937579766d16/1?pq-origsite=gscholar&cbl=1176347">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://search.proquest.com/openview/aadcafe07e0ddcd8b344937579766d16/1?pq-origsite=gscholar&cbl=1176347"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.tandfonline.com/doi/full/10.1080/014850190924520">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.tandfonline.com/doi/full/10.1080/014850190924520"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							positions={positions}
							trigger={<a href="https://www.sid.ir/En/Journal/ViewPaper.aspx?ID=65137">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.sid.ir/En/Journal/ViewPaper.aspx?ID=65137" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							positions={positions}
							trigger={
								<a href="http://www.scielo.br/scielo.php?pid=S1677-55382011000400002&script=sci_arttext&tlng=es">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="http://www.scielo.br/scielo.php?pid=S1677-55382011000400002&script=sci_arttext&tlng=es"
							/>
						</Popup>
						], can open the blood brain barrier [
						<Popup
							contentStyle={popupStyle}
							positions={positions}
							trigger={<a href="http://www.piers.org/piersonline/vol1/2k5hz_p638.pdf">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="http://www.piers.org/piersonline/vol1/2k5hz_p638.pdf" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/000689938190398X?via%3Dihub">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/000689938190398X?via%3Dihub"
							/>
						</Popup>
						], cause the big C (cancer) [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5417432/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5417432/" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.biorxiv.org/content/biorxiv/early/2016/05/26/055699.full.pdf">R</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.biorxiv.org/content/biorxiv/early/2016/05/26/055699.full.pdf"
							/>
						</Popup>
						].{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.researchgate.net/publication/281261829_Microwave_frequency_electromagnetic_fields_EMFs_produce_widespread_neuropsychiatric_effects_including_depression">
									This study
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.researchgate.net/publication/281261829_Microwave_frequency_electromagnetic_fields_EMFs_produce_widespread_neuropsychiatric_effects_including_depression"
							/>
						</Popup>{' '}
						and{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S0891061815000599">
									this study
								</a>
							}
							positions={positions}
							on="hover"
						>
							{' '}
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S0891061815000599"
							/>
						</Popup>
						talk about EMFs causing the following: sleep disturbance/insomnia [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.who.int/peh-emf/publications/elf_ehc/en/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.who.int/peh-emf/publications/elf_ehc/en/" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3561068/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3561068/" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/23051584">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/23051584" />
						</Popup>
						], headaches [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/bem.20379">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://onlinelibrary.wiley.com/doi/abs/10.1002/bem.20379" />
						</Popup>
						], depression/depressive symptoms, fatigue/tiredness, dysesthesia, concentration/attention
						dysfunction, memory changes, dizziness, irritability, loss of appetite/body weight,
						restlessness/anxiety, nausea, chronic pain [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3052250/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3052250/" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib41">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib41"
							/>
						</Popup>
						], skin burning/tingling/dermographism and EEG changes. You can read about the upcoming 5G, and
						its potential dangers{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://emfacademy.com/5g-radiation/">here</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://emfacademy.com/5g-radiation/" />
						</Popup>
						.
						<img
							alt="Power Density vs. health effects of EMF's"
							className="blog-image"
							src={powerVsEffect}
						/>
						<div style={{ textAlign: 'center' }}>
							By Magda Havas, a field researcher and professor in EMF exposure [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="https://www.magdahavas.org/wordpress/wp-content/uploads/2009/10/07_Havas_WiFi-SNAFU.pdf">
										R
									</a>
								}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://www.magdahavas.org/wordpress/wp-content/uploads/2009/10/07_Havas_WiFi-SNAFU.pdf"
								/>
							</Popup>
							]
						</div>
						<br />
						Not all EMF’s are created equal. And their effects are as varied as they are. It’s generally
						accepted that pulsed EMF’s like the ones from laptops, routers, and cell phones which send
						packets of information, and bad home wiring (
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://emfacademy.com/dirty-electricity-dangerous/">dirty electricity</a>
							}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://emfacademy.com/dirty-electricity-dangerous/" />
						</Popup>
						) have more biological effects than slow wave or continuous fields like those in the atmosphere,
						or in well wired homes. Dirty electricity occurs when home wiring is not properly grounded or
						shielded. Signals in the air or from computers, other electronics, mini transformers/power
						convertors, dimmer switches, CFL and LED lighting combine high frequency waves with the normal
						60hz in homes and have extreme negative effects [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://healthybuildingscience.com/2013/09/10/emi-and-leds-not-all-leds-are-the-same/">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://healthybuildingscience.com/2013/09/10/emi-and-leds-not-all-leds-are-the-same/"
							/>
						</Popup>
						,
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://dspace.kpfu.ru/xmlui/handle/net/137628">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://dspace.kpfu.ru/xmlui/handle/net/137628" />
						</Popup>
						,
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="http://sammilham.com/ADHD%20pdf.pdf">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="http://sammilham.com/ADHD%20pdf.pdf" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="http://electricalpollution.com/documents/WWcolour.pdf">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="http://electricalpollution.com/documents/WWcolour.pdf" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.tandfonline.com/doi/abs/10.3109/15368378.2012.743909">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.tandfonline.com/doi/abs/10.3109/15368378.2012.743909"
							/>
						</Popup>
						]. <br />
						<br />
						You can learn about the different types of fields and how they effect you{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://selfhacked.com/blog/emfs-bad-unhealthy-health-effects-emfs/">here</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://selfhacked.com/blog/emfs-bad-unhealthy-health-effects-emfs/"
							/>
						</Popup>{' '}
						and
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="http://emfwise.com/">here</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="http://emfwise.com/" />
						</Popup>
						. I would highly suggest doing some experimentation if you feel called to it.{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://emfacademy.com/emf-radiation-everyday-life/">Here's</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://emfacademy.com/emf-radiation-everyday-life/" />
						</Popup>{' '}
						a link to get started. I personally use this{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://emfacademy.com/emf-radiation-everyday-life/">EMF meter</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://emfacademy.com/emf-radiation-everyday-life/" />
						</Popup>
						, but people have found{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://emfacademy.com/emf-radiation-everyday-life/">this one</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://emfacademy.com/emf-radiation-everyday-life/" />
						</Popup>{' '}
						useful too.{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://emfacademy.com/emf-radiation-everyday-life/">This one</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://emfacademy.com/emf-radiation-everyday-life/" />
						</Popup>{' '}
						detects dirty electricity.
						<br />
						<br />
						<h3>EMF Mecahnisms of Action</h3>If the info below feels intimidating don’t worry. It’s not
						important to understand all of it in order for it to be useful. It’s just important to have a
						clear picture to understand and believe that it does have an effect, and for methods in
						mitigating that effect. Remembering key words might help in future health exploration.
						<br />
						<br />
						EMFs are only recently recognized by the WHO as a class B possible carcinogen, in the same
						category as Lead and other heavy metals. The reason for the contradictory beliefs around EMFs is
						because of the previous understanding of their mechanisms of action. EMFs are currently split
						into two categories. Ionizing and non-ionizing radiation. This just means, does the E/M particle
						have enough energy to knock electrons out of their orbit, and heat your tissue, like X-rays do.
						Most common forms of EMF exposure (home, wifi, cell phones, laptops) are non-ionizing, and so
						have been previously thought to be safe.
						<br />
						<br />
						Recently{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://emfacademy.com/emf-radiation-everyday-life/">Martin Pall</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://emfacademy.com/emf-radiation-everyday-life/" />
						</Popup>
						, a researcher and professor in biochemistry medical science at Washington State University,
						made great headway in charting the bio-effects of non-ionizing radiation through voltage gated
						calcium channel (VGCC) activation. [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.researchgate.net/publication/275052209_Scientific_evidence_contradicts_findings_and_assumptions_of_Canadian_Safety_Panel_6_Microwaves_act_through_voltage-gated_calcium_channel_activation_to_induce_biological_impacts_at_non-thermal_levels_s">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.researchgate.net/publication/275052209_Scientific_evidence_contradicts_findings_and_assumptions_of_Canadian_Safety_Panel_6_Microwaves_act_through_voltage-gated_calcium_channel_activation_to_induce_biological_impacts_at_non-thermal_levels_s"
							/>
						</Popup>
						]. VGCCs are present in most cells in the human body. They play obligatory physiological roles
						in synaptic plasticity,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/topics/neuroscience/genetic-transcription">
									gene transcription
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/topics/neuroscience/genetic-transcription"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/topics/neuroscience/neurotransmitter-release">
									neurotransmitter release
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/topics/neuroscience/neurotransmitter-release"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/topics/neuroscience/neurite-outgrowth">
									neurite outgrowth
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/topics/neuroscience/neurite-outgrowth"
							/>
						</Popup>
						, hormone secretion, muscle contractions and the activation of calcium-dependent enzymes [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib311">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib311"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib313">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib313"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib314">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib314"
							/>
						</Popup>
						].
						<img alt="Power Density vs. health effects of EMF's" className="blog-image" src={vgcc} />
						<div style={{ textAlign: 'center' }}>
							Image by{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="https://www.emfanalysis.com/new-paradigm-emf-science/">emfanalysis</a>
								}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.emfanalysis.com/new-paradigm-emf-science/" />
							</Popup>
						</div>
						<br />
						VGCCs are activated by voltage, usually created by Na channels [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib10">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib10"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib20">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S089662731400244X#bib20"
							/>
						</Popup>
						], but any voltage source will do. This causes hundreds of calcium ions to flow into the
						channel, and into the cell and stimulates elevation of nitric oxide (NO) and super oxide (SO)
						which react to create perioxinitrite (ONOO), a potential highly damaging oxidant. Hydroxil
						radical is created by this mechanism as well. This is called the NO/ONOO pathway activation. And
						it’s known to damage mitochondria, nuclear and mitochondrial DNA, inducing rapid aging [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.degruyter.com/view/j/reveh.2013.28.issue-2-3/reveh-2013-0004/reveh-2013-0004.xml">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.degruyter.com/view/j/reveh.2013.28.issue-2-3/reveh-2013-0004/reveh-2013-0004.xml"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://books.google.com/books?hl=en&lr=&id=JEg9BAAAQBAJ&oi=fnd&pg=PP35&dq=rapid+aging+syndrome+emf&ots=WbLpLEDAcZ&sig=Ens4aEYncami_VCwPezWFNWvqQE#v=onepage&q=rapid%20aging%20syndrome%20emf&f=false">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://books.google.com/books?hl=en&lr=&id=JEg9BAAAQBAJ&oi=fnd&pg=PP35&dq=rapid+aging+syndrome+emf&ots=WbLpLEDAcZ&sig=Ens4aEYncami_VCwPezWFNWvqQE#v=onepage&q=rapid%20aging%20syndrome%20emf&f=false"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.physiology.org/doi/full/10.1152/physrev.1998.78.2.547">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.physiology.org/doi/full/10.1152/physrev.1998.78.2.547"
							/>
						</Popup>
						], chronic fatigue syndrome (CFS), fibromyalgia (FM), multiple chemical sensitivity (MCS) [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://books.google.com/books?hl=en&lr=&id=J7ei9UHS8uYC&oi=fnd&pg=PA39&dq=no/onoo+cycle+fm+cfs&ots=nmZk0lnMb-&sig=GzFszwstunxjwzyvtBXLKH30N4M">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://books.google.com/books?hl=en&lr=&id=J7ei9UHS8uYC&oi=fnd&pg=PA39&dq=no/onoo+cycle+fm+cfs&ots=nmZk0lnMb-&sig=GzFszwstunxjwzyvtBXLKH30N4M"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.researchgate.net/profile/Martin_Pall/publication/228471891_The_NOONOO-Vicious_Cycle_Mechanism_as_the_Cause_of_Chronic_Fatigue_SyndromeMyalgic_Encephalomyelitis/links/0046352ee923d6d25a000000.pdf">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.researchgate.net/profile/Martin_Pall/publication/228471891_The_NOONOO-Vicious_Cycle_Mechanism_as_the_Cause_of_Chronic_Fatigue_SyndromeMyalgic_Encephalomyelitis/links/0046352ee923d6d25a000000.pdf"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://pdfs.semanticscholar.org/d25c/0b1cb9ac231157f9cee9c31154de8378fafd.pdf">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://pdfs.semanticscholar.org/d25c/0b1cb9ac231157f9cee9c31154de8378fafd.pdf"
							/>
						</Popup>
						] and much more. (See section on mitochondria)
						<br />
						<br />
						There are inactivation mechanisms that stop calcium signaling when calcium inside the cell
						reaches a certain threshold, or the channel stays open for prolonged periods of time. [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://www.sciencedirect.com/science/article/pii/S089662731400244X">R</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedirect.com/science/article/pii/S089662731400244Xf"
							/>
						</Popup>
						] This is probably the reason pulsed EMFs from communication devices, and dirty electricity are
						more dangerous than low frequency waves like a home power when installed correctly. Because the
						inactivation mechanisms don’t have the opportunity to function if the waves are sporadic or high
						frequency.
						<img
							alt="EMF effects on voltage gated calcium channels pathways"
							className="blog-image"
							src={vggcPathways}
						/>
						<div style={{ textAlign: 'center' }}>
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="https://www.vagbrytaren.org/Hur_tradlos_teknik_skadar_20160310%20(1).pdf">
										Slides
									</a>
								}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://www.vagbrytaren.org/Hur_tradlos_teknik_skadar_20160310%20(1).pdf"
								/>
							</Popup>{' '}
							by Pall Martin
						</div>
						<br />
						<div style={{ width: '92%', margin: 'auto' }}>
							<span style={{ fontStyle: 'italic' }}>
								<strong>Fun Fact:</strong> It takes more energy to relax than it does to flex! This is
								why rigor mortise happens. There is no more energy to relax the muscles. Flexing only
								requires a voltage to open calcium channels, when the channel is open, calcium naturally
								flows in because of a concentration gradient (much higher concentrations outside the
								cell than inside). When you want to relax, you actually need a lot of ATP (and
								magnesium) to pump the calcium back out. So when you’re feeling tense, it may not be
								because of too much anxious energy, but too little. And why magnesium supplementation is
								suggested for jaw clenching.
							</span>
						</div>
						<br />
						<br />
						<h3>Methods to mitigate effects of EMF</h3>
						Sleep is the most important time to limit EM radiation because it will inhibit deep sleep. Sleep
						is extremely important in preventing neurodegeneration, improving memory and cognitive function,
						preventing mental illness, detoxification, cardiovascular health, immune health and much more.
						Avoidance is the only true way, but I live in an apartment with upwards of 10 wifi signals
						around me and old wiring with no ground. So these are what I use to mitigate damage until I can
						move.
						<br />
						<br />
						<div style={{ width: '92%', margin: 'auto' }}>
							<li>Put your phone on airplane mode during sleep.</li>
							<li>Don’t sleep in the same room as a wifi router or even turn it off at night.</li>
							<li>
								Get a{' '}
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={
										<a href="https://www.amazon.com/Greenwave-Broadband-EMI-Electricity-Meter/dp/B01MEFVYQD/ref=sr_1_2?crid=OQQLSVITN9LJ&keywords=dirty+electricity&qid=1552970079&s=gateway&sprefix=dirty+electri%2Caps%2C181&sr=8-2">
											dirty electricity filter
										</a>
									}
									positions={positions}
									on="hover"
								>
									<embed
										className="readme"
										src="https://www.amazon.com/Greenwave-Broadband-EMI-Electricity-Meter/dp/B01MEFVYQD/ref=sr_1_2?crid=OQQLSVITN9LJ&keywords=dirty+electricity&qid=1552970079&s=gateway&sprefix=dirty+electri%2Caps%2C181&sr=8-2"
									/>
								</Popup>
								. It’s a large capacitor that plugs into any properly grounded outlet, that eliminates
								the higher frequency dirty electricity from the room.
							</li>
							<li>
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={
										<a href="http://nootropicsdepot.com/magnesium-l-threonate-powder/">Magnesium</a>
									}
									positions={positions}
									on="hover"
								>
									<embed
										className="readme"
										src="http://nootropicsdepot.com/magnesium-l-threonate-powder/"
									/>
								</Popup>{' '}
								L-theonate: Magnesium is needed to pump calcium ions back out of the channels, as well
								as 299 other things [
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={<a href="https://wellnessmama.com/54128/magnesium-deficiency/">R</a>}
									positions={positions}
									on="hover"
								>
									<embed
										className="readme"
										src="https://wellnessmama.com/54128/magnesium-deficiency/"
									/>
								</Popup>
								]. Many in America are deficient and its exacerbated with EMFs
							</li>
							<li>
								Increase NRF2 pathway activation.{' '}
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={
										<a href="https://selfhacked.com/blog/about-nrf2-and-natural-ways-to-increase-it/">
											Here's
										</a>
									}
									positions={positions}
									on="hover"
								>
									<embed
										className="readme"
										src="https://selfhacked.com/blog/about-nrf2-and-natural-ways-to-increase-it/"
									/>
								</Popup>{' '}
								how.
							</li>
							<li>
								Nitric Oxide dump <a href="https://youtu.be/PwJCJToQmps">workout</a> (this is a video by{' '}
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={<a href="https://zachbushmd.com/">Zach Bush</a>}
									positions={positions}
									on="hover"
								>
									<embed className="readme" src="https://zachbushmd.com/" />
								</Popup>{' '}
								, a brilliant empathic triple board certified doctor, the workout is only 4 minutes and
								can be done anywhere). Nitric oxide is an important signaling molecule in your body.
								It’s produced in massive quantities with EMF exposure and too much can cause NO to bind
								to cytochrome C in the mitochondria’s electron transport chain. This is where oxygen
								normally binds to ADP to make{' '}
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={<a href="https://www.wikiwand.com/en/Adenosine_triphosphate">ATP</a>}
									positions={positions}
									on="hover"
								>
									<embed
										className="readme"
										src="https://www.wikiwand.com/en/Adenosine_triphosphate"
									/>
								</Popup>
								. and to make water. NO being there inhibits energy and water production and causes free
								radical creation. This means less energy to reduce inflammation, fix or remove damaged
								cells, DNA, etc. This is basically the mechanism of aging. So dumping NO is very
								important. See more in Light section below
							</li>
							<li>
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={
										<a href="https://selfhacked.com/blog/carnitine-top-18-science-based-health-effects-carnitine/">
											Lower the NO/ONOO{' '}
										</a>
									}
									positions={positions}
									on="hover"
								>
									<embed
										className="readme"
										src="https://selfhacked.com/blog/carnitine-top-18-science-based-health-effects-carnitine/"
									/>
								</Popup>{' '}
								(pronouced no, oh no 😉) pathway induced by EMFs: NMDA antagonists or agents that
								indirectly lower NMDA activity, magnesium, cetyl carnitine/carnitine [
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={
										<a href="https://selfhacked.com/blog/carnitine-top-18-science-based-health-effects-carnitine/">
											R
										</a>
									}
									positions={positions}
									on="hover"
								>
									<embed
										className="readme"
										src="https://selfhacked.com/blog/carnitine-top-18-science-based-health-effects-carnitine/"
									/>
								</Popup>
								],
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={
										<a href="https://www.gardenoflife.com/content/product/raw-coq10/">COQ10</a>
									}
									positions={positions}
									on="hover"
								>
									<embed
										className="readme"
										src="https://www.gardenoflife.com/content/product/raw-coq10/"
									/>
								</Popup>{' '}
								or{' '}
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={
										<a href="https://smile.amazon.com/Dr-Mercola-Ubiquinol-100mg-Antioxidant/dp/B004H6YD1K/ref=sr_1_13?crid=3C017QVZI0F3R&keywords=ubiquinol&qid=1553551811&s=gateway&sprefix=ubiq%2Caps%2C479&sr=8-13">
											unbiquinol
										</a>
									}
									positions={positions}
									on="hover"
								>
									<embed
										className="readme"
										src="https://smile.amazon.com/Dr-Mercola-Ubiquinol-100mg-Antioxidant/dp/B004H6YD1K/ref=sr_1_13?crid=3C017QVZI0F3R&keywords=ubiquinol&qid=1553551811&s=gateway&sprefix=ubiq%2Caps%2C479&sr=8-13"
									/>
								</Popup>{' '}
								[
								<Popup
									contentStyle={popupStyle}
									className="readme-popup"
									trigger={<a href="https://selfhacked.com/blog/coenzyme-q10-ubiquinol/">R</a>}
									positions={positions}
									on="hover"
								>
									<embed
										className="readme"
										src="https://selfhacked.com/blog/coenzyme-q10-ubiquinol/"
									/>
								</Popup>
								], hydroxocobalamin form of vitamin B12, high dose folates, D-ribose, RNA, inosine
							</li>
						</div>
						<br />
						<h3>Light</h3>I alluded to the correlation between cognitive function and sunlight above [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://ehjournal.biomedcentral.com/articles/10.1186/1476-069X-8-34">R</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://ehjournal.biomedcentral.com/articles/10.1186/1476-069X-8-34"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://jamanetwork.com/journals/jamaneurology/article-abstract/796288">R</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://jamanetwork.com/journals/jamaneurology/article-abstract/796288"
							/>
						</Popup>
						,
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.mdpi.com/2072-6643/8/3/142">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.mdpi.com/2072-6643/8/3/142" />
						</Popup>
						]. There is so much to this story. One reason is vitamin D, an extremely important nutrient [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://selfhacked.com/blog/35proven-health-benefits-vitamin-d-part-1/">R</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://selfhacked.com/blog/35proven-health-benefits-vitamin-d-part-1/"
							/>
						</Popup>
						]. Another reason is photo-biomodulation. Something I described when talking about red light
						therapy. The mechanism of action of all the{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://selfhacked.com/blog/red-light-therapy-benefits/">myriad benefits</a>
							}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://selfhacked.com/blog/red-light-therapy-benefits/" />
						</Popup>{' '}
						is NO release from the mitochondria, and rapid ATP production, and reduction of free radical
						creation. If you’re feeling <strong>any</strong> kind of way, red to IR light can probably help
						with that. 52–55% of the light emitted from the sun is in this healing range. And your energy
						efficient windows are specifically designed to block this light out. They also block out UVB,
						the wavelength responsible for creating vitamin D. The sun gets a bad rap because of the
						potentially damaging wavelength UVA, but this wavelength, when you are in the sun and listen to
						your body, is offset by the healing red wavelengths. The benefits of sun exposure are explained
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://selfhacked.com/blog/avoiding-sun-will-kill-14-proven-science-based-health-benefits-sun/">
									here
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://selfhacked.com/blog/avoiding-sun-will-kill-14-proven-science-based-health-benefits-sun/"
							/>
						</Popup>
						, and{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://selfhacked.com/blog/sunbathing-winter-nyc/">here</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://selfhacked.com/blog/sunbathing-winter-nyc/" />
						</Popup>{' '}
						and include, increase mood, brain function, vitamin d, less falls, longer life, lower risk of
						degenerative brain diseases, circadian rhythm regulation (extremely important, I suggest reading
						more{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://selfhacked.com/blog/chronotherapy/">here</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://selfhacked.com/blog/chronotherapy/" />
						</Popup>
						), protects against heart disease, high blood pressure, cancer, increases sex hormone and
						wakefulness, influences dental health, natural pain killer, good for your eyes (yes, that’s
						right, your eyes [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://jama.jamanetwork.com/article.aspx?articleid=2441244">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://jama.jamanetwork.com/article.aspx?articleid=2441244"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4451516/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4451516/" />
						</Popup>
						]), protects against autoimmunity, arthritus, and achne. <strong>But</strong>, I can’t discount
						the damage to DNA that is caused by over exposure to UV light from the sun. The guideline I
						follow is this: avoid exposing your face, the skin on your face is thinner and more easily
						damaged. generally I expose as much skin as possible, until I turn just a little pink. Any more
						than that risks burn. There is damage with UV, but the key is to keep it low enough that your
						mitochondria, energized by red and IR wavelengths, have an easy time fixing it. We lived in a
						vastly different world than the blink of an eye ago, in terms of lifetime of our species, who’s
						rules of survival have been unrecognizably transformed. Now its our imperative to understand the
						nuance of this new world of self health experimentation. If you’re feeling sore, anxious, tired,
						sleepless, don’t do what I did, and assume its just the new normal, or natural aging. Trust me
						you have more power over your health than you think. And you
						<strong>can</strong> reverse your symptoms. We need movement, to eat well, put our phones on
						airplane mode and to get out into the sun, exposing our skin and eyes to reasonable amounts of
						natural light.
						<br />
						<br />
						<h3>Red Light Therapy</h3>
						Here’s my collection of all the studied benefits of red light therapy from this{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://selfhacked.com/blog/my-review-of-lllt/">article</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://selfhacked.com/blog/my-review-of-lllt/" />
						</Popup>
						. (Get those with the sun for free). Brace yourself, its extensive… lowers inflammation and
						oxidative damage [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/16706694">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/16706694" />
						</Popup>
						], <strong>Wound healing/Tissue growth and repair</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC522143/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC522143/" />
						</Popup>
						], <strong>Depression</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="http://www.behavioralandbrainfunctions.com/content/5/1/46">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="http://www.behavioralandbrainfunctions.com/content/5/1/46" />
						</Popup>
						], <strong>Anxiety</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="http://www.behavioralandbrainfunctions.com/content/5/1/46">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="http://www.behavioralandbrainfunctions.com/content/5/1/46" />
						</Popup>
						], <strong>Pain relief</strong> in various syndromes [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/16706694">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/16706694" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/25024832">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/25024832" />
						</Popup>
						,
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/25061034">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/25061034" />
						</Popup>
						], <strong>Arthritis</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="http://arthritis-research.com/content/15/5/120">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="http://arthritis-research.com/content/15/5/120" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/22747309">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/22747309" />
						</Popup>
						], <strong>Back pain</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18425909">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/18425909" />
						</Popup>
						], <strong>neck pain</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/19913903">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/19913903" />
						</Popup>
						], <strong>Autoimmune conditions</strong> like <strong>thyroiditis</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/22718472">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/22718472" />
						</Popup>
						] and others, strokes [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3065857/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3065857/" />
						</Popup>
						], and other brain injuries [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3065857/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3065857/" />
						</Popup>
						], Tooth repair [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.sciencedaily.com/releases/2014/05/140528150559.htm">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.sciencedaily.com/releases/2014/05/140528150559.htm"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/25072362">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/25072362" />
						</Popup>
						], pain from orthodontics [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18251609?dopt=Citation">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/18251609?dopt=Citation"
							/>
						</Popup>
						], <strong>Hair growth</strong> and male pattern baldness [R] — different wavelength and power
						are required, Acne [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18251609?dopt=Citation">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/18251609?dopt=Citation"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/22615511">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/22615511" />
						</Popup>
						], <strong>Heart attack</strong> — hastens healing of the damage [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24991808">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24991808" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/16800001">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/16800001" />
						</Popup>
						], <strong>Fractures</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/19399356">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/19399356" />
						</Popup>
						], <strong>Skin conditions</strong> like psoriasis and others [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24049929">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24049929" />
						</Popup>
						], <strong>Fibromyalgia</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24801056">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24801056" />
						</Popup>
						], Improving <strong>bone density</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/22582845">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/22582845" />
						</Popup>
						.{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/21077725">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/21077725" />
						</Popup>
						], Increasing <strong>testosterone</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://selfhacked.com/app/uploads/2017/12/the-effects-of-low-level-laser-therapy-lllt-on-the-testis-in-elevatingserum-testosterone-level-in-rats.pdf">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://selfhacked.com/app/uploads/2017/12/the-effects-of-low-level-laser-therapy-lllt-on-the-testis-in-elevatingserum-testosterone-level-in-rats.pdf"
							/>
						</Popup>
						], Enhancing <strong>liver regeneration</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/20932182">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/20932182" />
						</Popup>
						] and protection [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/22827550">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/22827550" />
						</Popup>
						], <strong>Allergic rhinitis</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24319484">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24319484" />
						</Popup>
						], <strong>Neuropathy</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24026991">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24026991" />
						</Popup>
						],
						<strong>Candida</strong> infection [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/22189647">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/22189647" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/15493034">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/15493034" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/15954824">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/15954824" />
						</Popup>
						], Vision disorder like <strong>macular degeneration</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18588438">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/18588438" />
						</Popup>
						] and <strong>retinitis pigmentosa</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24527959">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24527959" />
						</Popup>
						], <strong>Hearing problems</strong> such as tinnitus [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="http://www.hindawi.com/journals/tswj/2013/596076/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="http://www.hindawi.com/journals/tswj/2013/596076/" />
						</Popup>
						] — in the short term or when combined with rTMS [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/25030898">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/25030898" />
						</Popup>
						], <strong>Muscle tissue</strong> for <strong>performance</strong>, <strong>fatigue</strong>,
						and <strong>repair</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/23626925">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/23626925" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/22714676">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/22714676" />
						</Popup>
						], <strong>Spinal cord injury</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24030687">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24030687" />
						</Popup>
						],
						<strong>Parkinson’s</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/19534794/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/19534794/" />
						</Popup>
						], <strong>Alzheimer’s</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/23946409">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/23946409" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24994540">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24994540" />
						</Popup>
						], <strong>Injuries in connective tissue/joints</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18602833?dopt=Citation">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/18602833?dopt=Citation"
							/>
						</Popup>
						], <strong>Achilles tendon</strong>[
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/25070591">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/25070591" />
						</Popup>
						], <strong>Elbow tendinopathy</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18510742?dopt=Citation">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/18510742?dopt=Citation"
							/>
						</Popup>
						], <strong>Carpal Tunnel Syndrome</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24905929">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24905929" />
						</Popup>
						], <strong>Burns</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/19882488">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/19882488" />
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/15664505">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/15664505" />
						</Popup>
						], Some <strong>migraines</strong>{' '}
						and <strong>headaches</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/12811613">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/12811613" />
						</Popup>
						] — may make them worse too if you have vasodilatory headaches, <strong>Peptic ulcers</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/16613009">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/16613009" />
						</Popup>
						], <strong>Venous Leg Ulcers</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/9865208">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/9865208" />
						</Popup>
						], <strong>Pressure ulcers</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18172370?dopt=Citation">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/18172370?dopt=Citation"
							/>
						</Popup>
						], <strong>Oral Mucositis</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18305441?dopt=Citation">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/18305441?dopt=Citation"
							/>
						</Popup>
						] <strong>Aphthous stomatitis</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24725989">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24725989" />
						</Popup>
						], <strong>Edema</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/17920925?dopt=Citation">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/17920925?dopt=Citation"
							/>
						</Popup>
						,{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24974175">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24974175" />
						</Popup>
						], <strong>Lung inflammation</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24792475">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24792475" />
						</Popup>
						], <strong>COPD</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2830167/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2830167/" />
						</Popup>
						], <strong>Alcohol addiction</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/15674998/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/15674998/" />
						</Popup>
						], <strong>Narcolepsy</strong> based on theory [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/17943086?dopt=Citation">R</a>}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://www.ncbi.nlm.nih.gov/pubmed/17943086?dopt=Citation"
							/>
						</Popup>
						], Narcolepsy is likely an autoimmune disorder [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3972560/">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3972560/" />
						</Popup>
						],
						<strong>Oral Lichen Planus</strong> [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/24724146">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/24724146" />
						</Popup>
						], <strong>Cancer</strong>: Various tumors, when used with a photosensitizer [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={<a href="https://en.wikipedia.org/wiki/Photodynamic_therapy">R</a>}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://en.wikipedia.org/wiki/Photodynamic_therapy" />
						</Popup>
						]
						<br />
						<br />
						<h3>Non-Native Light</h3>Scientists suggest avoiding artificial lighting whenever possible but
						especially at night. The graph below shows how different lights plugged into the wall can effect
						dirty electricity, and contribute to the aformentioned bio-effects.
						<br />
						{this.DirtyElectricityofLights()}
						<br />
						<br />
						<h3>Mitochondria and becoming a mitochondriac</h3>
						To be upfront, I might be a little obsessed with mitochondria because so many Dr.’s out there I
						respect are. And because I read the book “Mitochondria and the future of medicine, the key to
						chronic illness, aging and life itself” by Lee Know. I mean … with a title like that? I’ve
						actually been dancing around this subject the whole article. Mitochondria is where its at. EMF’
						damage mitochondria, the sun helps them. And mitochondria health is just exactly how healthy you
						are. Many scientists have converged on the{' '}
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://en.wikipedia.org/wiki/Photodynamic_therapy">mitochondrial theory</a>
							}
							positions={positions}
							on="hover"
						>
							<embed className="readme" src="https://en.wikipedia.org/wiki/Photodynamic_therapy" />
						</Popup>{' '}
						of aging. And to quote Dr. Know’s book’s quote of Star Wars: Episode I:
						<br />
						<br />
						<div style={{ width: '92%', margin: 'auto' }}>
							<span style={{ fontStyle: 'italic' }}>
								Without the midi-chlorians, life could not exist, and we would have no knowledge of the
								Force. They continually speak to us, telling us the will of the force. When you learn to
								quiet your mind, you’ll hear them speaking to you. A long time ago in a galaxy far, far
								away, there were intelligent microscopic life forms called midi-chlorians that lived
								symbiotically inside the cells of all living things. When present in sufficient numbers,
								they allow there symbiotic host to detect the pervasive energy field known as the force.
								Midi-chlorian count were linked to ones potential in the Force, ranging from normal
								human levels of 2,500 per cell to the much higher levels in a Jedi. The highest known
								midi-chlorian count (over 20,000 per cell) belonged to Jedi Anakin Skywalker— MFMKCIAL
							</span>
						</div>
						<br />
						He continues eloquently, but I’ll sum it up by remarking that George Lucas loosely based the
						idea of midi-chlorians on mito-chondria. It’s interesting to know that mitochondria are thought
						to be a symbiotic relationship between a separate bacteria engulfed by almost all human cells.
						Mitochondria (and similarly chloroplasts in plants [
						<Popup
							contentStyle={popupStyle}
							className="readme-popup"
							trigger={
								<a href="https://sciencing.com/mitochondria-chloroplasts-resemble-bacteria-22520.html">
									R
								</a>
							}
							positions={positions}
							on="hover"
						>
							<embed
								className="readme"
								src="https://sciencing.com/mitochondria-chloroplasts-resemble-bacteria-22520.html"
							/>
						</Popup>
						]) are crucial for the energy demands of all multicellular organisms. No
						mitochondria/chloroplasts, no multicellular life. It’s also interesting to note that yours and
						everyone’s mitochondrial DNA is only passed down by our mothers. Making it possible to trace
						back the mother of all mothers (Mitochondrial Eve) through mitochondrial DNA, to Africa,
						approximately 170,000 years ago.
						<img
							alt="EMF effects on voltage gated calcium channels pathways"
							className="blog-image"
							src={drugs}
						/>
						<div style={{ textAlign: 'center' }}>
							Common Medications that Damage Mitochondria [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="http://psychrights.org/Research/Digest/NLPs/DrugsCauseMitochondrialDamage.pdf">
										R
									</a>
								}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="http://psychrights.org/Research/Digest/NLPs/DrugsCauseMitochondrialDamage.pdf"
								/>
							</Popup>{' '}
							]
						</div>
						<br />
						<br />
						<h3>Mitochondria’s role in health issues</h3>
						You’ll find that some health issues may be caused by mitochondrial dysfunction, while common
						medications to treat them cause more mitochondrial dysfunction. I would be cautious when
						thinking about taking any of these medications, that only treat the symptom, while making the
						cause worse. Below are some common health issues caused or influenced by mitochondrial
						dysfunction. The list is not exhaustive. If any of these apply to you, I suggest more research.
						I’m 100% sure its more complicated than I am presenting.
						<br />
						<br />
						<li>
							Arrhythmias [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://academic.oup.com/cardiovascres/article/88/2/241/345999">R</a>}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://academic.oup.com/cardiovascres/article/88/2/241/345999"
								/>
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="https://www.sciencedirect.com/science/article/pii/S0163725811000854">R</a>
								}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://www.sciencedirect.com/science/article/pii/S0163725811000854"
								/>
							</Popup>
							]: …tbc
						</li>
						<li>
							e heart failure: without sufficient ATP created by mitochondria the diastolic phase
							(relaxation phase) of the heart beat cannot happen, and the heart can’t fill fully with
							blood. This is called diastolic dysfunction. The beginning stages of this is characterized
							by hypertrophy and enlarging of the heart muscle and stiffening of ventricular walls and is
							a sign of congestive heart failure down the road. [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="https://www.goodreads.com/book/show/38622695-mitochondria-and-the-future-of-medicine">
										R
									</a>
								}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://www.goodreads.com/book/show/38622695-mitochondria-and-the-future-of-medicine"
								/>
							</Popup>
							]
						</li>
						<li>
							Neurodegeneration: recent evidence has shown that the accumulation of mitochondrial DNA
							mutations and diminished cellular energy production accelerates normal aging, leads to
							oxidative damage to nuclear DNA, and impairs gene transcription [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/ana.20624">R</a>}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://onlinelibrary.wiley.com/doi/abs/10.1002/ana.20624"
								/>
							</Popup>
							] and may contribute to the pathogenesis of Alzheimer’s disease [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="https://www.sciencedirect.com/science/article/pii/S1567724907001122">R</a>
								}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://www.sciencedirect.com/science/article/pii/S1567724907001122"
								/>
							</Popup>
							], Parkinson’s disease, Huntington’s disease, amyotrophic lateral sclerosis, hereditary
							spastic paraplegia, and cerebellar degenerations. Anti-oxidants like astaxanthin, hydrogen
							water [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://selfhacked.com/blog/hydrogen-water/">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://selfhacked.com/blog/hydrogen-water/" />
							</Popup>
							], turmeric (with black pepper), can pass the blood brain barrier and have a protective
							effect. Evidence suggests that dietary
							<strong>polyphenols</strong> such as{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://selfhacked.com/blog/hydrogen-water/">resveratrol</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://selfhacked.com/blog/hydrogen-water/" />
							</Popup>
							, epigallocatechin-3-gallate (EGCG), and curcumin have the capacity to mitigate
							age-associated damage induced by reactive oxygen species (ROS) by increasing the activity of
							SIRT1 [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2896035/">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2896035/" />
							</Popup>
							] and reducing the production of beta amaloids [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/23831960">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/23831960" />
							</Popup>
							]. The sun or red light therapy helps [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/17138809/">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/17138809/" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4707222/">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4707222/" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/3368532">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/3368532" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/17138809/">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/17138809/" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/15600135">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/15600135" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/14998915">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/14998915" />
							</Popup>
							]. Ketosis helps [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2367001/">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2367001/" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/26766547">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/26766547" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/18625458">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/18625458" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4101992/">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4101992/" />
							</Popup>
							]. Vitamin D [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/3368532">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/3368532" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/3368532">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/3368532" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="https://nutritionj.biomedcentral.com/articles/10.1186/s12937-015-0063-7">
										R
									</a>
								}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://nutritionj.biomedcentral.com/articles/10.1186/s12937-015-0063-7"
								/>
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4040018/">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4040018/" />
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.ncbi.nlm.nih.gov/pubmed/20966550/">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://www.ncbi.nlm.nih.gov/pubmed/20966550/" />
							</Popup>
							]. And Ubiquinol (coq10) [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://selfhacked.com/blog/ubiquinol-benefits/">R</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://selfhacked.com/blog/ubiquinol-benefits/" />
							</Popup>
							]. This is mostly a summary of{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://selfhacked.com/blog/alzheimer/">this</a>}
								positions={positions}
								on="hover"
							>
								<embed className="readme" src="https://selfhacked.com/blog/alzheimer/" />
							</Popup>{' '}
							selfhacked article, there’s a lot more there.
						</li>
						<li>
							Depression: It has been proposed that the balance between the stress response, and
							adaptation and available energy (from mitochondria) is crucial for mental health.
							Specifically stress activates different parts of the brain, and requires neuroplasticity
							which comes at a metabolic cost. Although it doesn’t mean that all mitochondrial disfunction
							will cause depression, or that all depression is caused by mitochondrial disfunction, but
							its worth looking into before taking a drug that will make mitochondrial function worse.
						</li>
						<li>
							ADHD: Studies have linked ADHD to environmental toxins known to damage mitochondria, and to
							free radical damage. And inattention and{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="https://www.sciencedirect.com/topics/medicine-and-dentistry/impulsiveness">
										impulsivity
									</a>
								}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://www.sciencedirect.com/topics/medicine-and-dentistry/impulsiveness"
								/>
							</Popup>{' '}
							may be related to decreased neuronal energy availability [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="https://www.sciencedirect.com/science/article/pii/S0006322301011738">R</a>
								}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://www.sciencedirect.com/science/article/pii/S0006322301011738"
								/>
							</Popup>
							,{' '}
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={
									<a href="https://www.sciencedirect.com/science/article/pii/S0149763499000603">R</a>
								}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://www.sciencedirect.com/science/article/pii/S0149763499000603"
								/>
							</Popup>
							]. The brain consumes 20% of available energy at rest. Astrocytes are important for
							providing energy by supplying lactate to rapidly firing neurons and to neurotransmitter
							release. Lactate is essential for rapidly firing neurons and is a better fuel source for the
							brain than glucose because it’s metabolized to form ATP more rapidly and unlike glucose, it
							doesn’t require ATP for its metabolism. In ADHD lactate production is not sufficient to
							supply rapidly firing neurons with energy during brief periods of high demand. This
							insufficiency leads to a local transient deficiency in ATP production, impaired restoration
							of ions (like calcium) across neuronal membranes, and slowed neuronal firing. This results
							in inconsistent performance of demanding cognitive tasks. These periods of rapid firing are
							then followed by slow unsynchronized firing, which exerts less demand on energy resources
							and allow replenishment of energy reserves and restoration of function. These brief periods
							of energy and depletion are suggested to account for the variability of behavioral response
							seen in patients with ADHD when performing complex tasks that require speed and accuracy.
						</li>
						<br />
						<br />
						<h3>Other things that harm mitochondria</h3>
						<li>
							Overeating: [
							<Popup
								contentStyle={popupStyle}
								className="readme-popup"
								trigger={<a href="https://www.futuremedicine.com/doi/abs/10.2217/nmt.14.14">R</a>}
								positions={positions}
								on="hover"
							>
								<embed
									className="readme"
									src="https://www.futuremedicine.com/doi/abs/10.2217/nmt.14.14"
								/>
							</Popup>
							]
						</li>
						<li>
							neurotransmitter that stimulates neurons and quickly depletes energy stores. Too much can
							cause oxidative damage, impair learning and memory, and cell death.
						</li>
						<br />
						<br />
						<h2>Things that help mitochondria</h2>
						<h3>Right Diet</h3>
						...tbc
						<br />
						<h3>Fasting</h3>
						...tbc
						<br />
						<h3>Exercise (HIIT/HIST)</h3>
						...tbc
						<br />
						<h3>Cold and Heat Therapy</h3>
						...tbc
						<br />
						<h3>The Sun</h3>
						...tbc
						<br />
						<br />
						Because there is so much conflicting information out there, I generally stick to two rules when
						researching health: make sure the web source has references to trusted scientific journals, and
						stay open to information that challenges currently held dogmas. Generally I’ve found
						selfhacked.com, wellnessmama.com, healthline.com and mercola.com (controversial as he is) to
						have studies linked in their articles, and to have integrity to consistently be expanding and
						challenging, and if needed, corecting, their own knowledge. I haven’t found livestrong.com to be
						very reliable. Whatever you do, don’t just click on any website for health information. The
						opinions available online are as varied as there are humans online.
						<br />
						<br />
						<h3>Conclusion</h3>
						Im not attempting to just present some facts about health here. What I require of myself and
						what your body wants of you, is a shift in mindset. To get in touch with our inner animal and
						give it what it needs. We evolved in symbiosis with our environment, and now our bodies are over
						stressed and out of place with modern chemicals, products and lifestyles. It’s my hope that we
						deeply understand that we need the natural world, because we evolved alongside the natural
						world, and we are the natural world.
						<br />
						<br />
						<h3>Quick References</h3>
						...tbc
					</p>
					{/* {this.DirtyElectricityofLights()} */}
				</div>
			</div>
		);
	}

	DirtyElectricityofLights() {
		const markSeriesProps = {
				animation: true,
				className: 'mark-series-example',
				sizeRange: [5, 15],
				seriesId: 'generated-scatter-plot',
				colorRange: ['#EFC1E3', '#59E4EC'],
				opacityType: 'literal',
				data: lightData,
				// onNearestXY: value => {
				// 	return this.setState({ value });
				// },
			},
			lightData = [
				{ x: 'GE Incandescent', y: 100 },
				{ x: 'Ecosmart CFL:EDxO-14', y: 320 },
				{ x: 'Philips CFL 88DN', y: 270 },
				{ x: 'GE CFL FLE15AG19 stable', y: 250 },
				{ x: 'Ecosmart LED 18321DECS', y: 205 },
				{ x: 'Philips LED 3PMS', y: 905 },
				{ x: 'CREE LED BA19-0805DQMF', y: 110 },
			];
		return (
			<div style={{ margin: 'auto' }}>
				<XYPlot
					height={300}
					width={600}
					xType="ordinal"
					margin={{ left: 50, right: 50, top: 10, bottom: 100 }}
					className="react-vis"
				>
					<HorizontalGridLines />
					<XAxis tickLabelAngle={-30} />
					<YAxis />
					<VerticalBarSeries data={lightData} />
				</XYPlot>
			</div>
		);
	}

	Navigation() {
		return (
			<div id="slideNav" ref={ref => (this.myElements['slideNave'] = ref)}>
				<ul>
					<li
						className="slideNavPrev"
						ref={ref => (this.myElements['slideNavPrev'] = ref)}
						onClick={() => this.GoToPrevSlide()}
					>
						<a href="#" title="Go to previous slide">
							<span className="ico ico-up" ref={ref => (this.myElements['ico ico-up'] = ref)}>
								↓
							</span>
						</a>
					</li>
					<li
						className="slideNavNext"
						ref={ref => (this.myElements['slideNavNext'] = ref)}
						onClick={() => this.GoToNextSlide()}
					>
						<a href="#" title="Go to next slide">
							<span className="ico ico-down" ref={ref => (this.myElements['ico ico-down'] = ref)}>
								↑
							</span>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Health;
