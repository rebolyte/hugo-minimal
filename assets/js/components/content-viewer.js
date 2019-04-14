Vue.component('content-samples', {
	template: `
		<div class="flex flex-col md:flex-row w-full rounded bg-white shadow-md max-w-4xl min-h-xs">

			<pre class="md:w-1/2 p-4 bg-gray-700 text-white overflow-auto rounded-tl rounded-bl">
{{ selectedItem.content }}
			</pre>

			<ul class="px-8 py-4 bg-gray-100 md:w-1/2 rounded-bl md:rounded-bl-none md:rounded-tr rounded-br">
				<li 
					v-for="(item, idx) in items" 
					class="select-none has-dropdown pb-2"
					:class="{ 'is-open': idx === selectedItemIdx, 'border-b-faint': idx !== (items.length - 1) }"
					@click="setSelected(idx)">
						<div class="flex justify-between px-2 my-4">
							<div class="text-gray-700 font-bold">{{ item.title }}</div>
							<div class="arrow"></div>
						</div>
						<div class="content text-gray-800 px-2 description">
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
