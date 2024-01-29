export const highlightChar = (name: string, query: string) =>
	query
		? name.replace(
				new RegExp(query + '[ัิ-ฺ็-๎]*', 'g'),
				(match) => `<span class="bg-primary-focus">${match}</span>`,
		  )
		: name;
