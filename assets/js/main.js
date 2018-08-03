console.log('JS iz herr');

window.sampleContent = [
	{
		title: 'Item 1',
		description: 'Description of item 1',
		content: 'This is the sample stuff.'
	},
	{
		title: 'Item 2',
		description: 'Description of item 2',
		content: 'A second great section of content.'
	},
	{
		title: 'Item 3',
		description: 'Description of item 3',
		content: 'A third thing for you to examine.'
	}
];

new Vue({
	el: '#app',
	data: {
		isMainMenuOpen: false
	}
});