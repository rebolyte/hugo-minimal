Vue.component('content-samples', {
	template: `
		<div class="flex flex-col md:flex-row w-full rounded bg-white shadow-md max-w-xl min-h-xs">

			<pre class="md:w-1/2 p-4 bg-grey-darkest text-white overflow-auto rounded-tl rounded-bl">
{{ selectedItem.content }}
			</pre>

			<ul class="list-reset px-8 py-4 bg-grey-lightest md:w-1/2 rounded-bl md:rounded-bl-none md:rounded-tr rounded-br">
				<li 
					v-for="(item, idx) in items" 
					class="select-none has-dropdown pb-2"
					:class="{ 'is-open': idx === selectedItemIdx, 'border-b-faint': idx !== (items.length - 1) }"
					@click="setSelected(idx)">
						<div class="flex justify-between px-2 my-4">
							<div class="text-rl-gray font-bold">{{ item.title }}</div>
							<div class="arrow"></div>
						</div>
						<div class="content text-grey-darker px-2 description">
							{{ item.description }}
						</div>
				</li>
			</ul>

		</div>
    `,
    props: {
        items: Array
    },
	data() {
		return {
			selectedItemIdx: 0,
		};
	},
	computed: {
		selectedItem() {
			return this.items[this.selectedItemIdx];
		}
	},
	methods: {
		setSelected(idx) {
			this.selectedItemIdx = idx;
		}
	}
});
