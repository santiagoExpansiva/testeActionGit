class _200001_Special_Base{

	public el:HTMLElement = document.createElement('a')

	public createEL(teste:string){

	}

	public renderAllFields(el:HTMLElement, cls:any){

	}

}

class Input{

	constructor(cls:any, obj:any){

	}
}

class _200001_tCard extends _200001_Special_Base {

	public img = new Input(this, {
		desc: 'url img', type: 'text', group: 'principal',elType:'attr'
	});

	public text = new Input(this, {
		desc: 'text', type: 'text', group: 'principal',elType:'attr'
	});

	public title = new Input(this, {
		desc: 'title', type: 'text', group: 'principal',elType:'attr'
	});

	public text2 = new Input(this, {
		desc: 'text', type: 'text',elType:'attr'
	});

	/**
	 * Comentário avançado
	 * @name Teste
	 * @param value - recebe o valor do title2
	 * 
	 * @remarks
   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
	 * 
	 * @see {@link http://example.com/@internal | the @internal tag}
   *
	 */
	public title2 = new Input(this, {
		desc: 'title', type: 'text',elType:'attr'
	});

	public onClick = new Input(this, {
		desc: 'title', type: 'text', group: 'principal',elType:'attr'
	});

	public render(): HTMLElement {

		super.createEL('t-card-4');
		this.renderAllFields(this.el, this);
		return this.el;

	}


	// 3 - Search Page

	public static readonly _SearchDetails = {
		section: 'a',
		desc: 'section',
		tags: ['section'],
		childrenTags: ['!elChild', '!restricted'],
		examples: [
		]
	}

}
