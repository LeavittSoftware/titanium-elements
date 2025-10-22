import{i as t,h as i,p as e,c as s,D as l,x as n,_ as o,r as d,e as a,t as m}from"./D1VSxa58.js";import{S as c}from"./8Xb6ke5I.js";import"./BKA6Xqhf.js";import"./BWMlI_tM.js";const r=["Dog","Cat","Lion","Hedgehog","Turtle","Monkey","Owl","Peacock","Pigeon","Spider","Tortoise","Zebra"];let u=class extends t{#t=r.slice(0,4);get demoItems(){return this.#t}set demoItems(t){this.#t=t}#i=!1;get disabled(){return this.#i}set disabled(t){this.#i=t}#e="Service animals are welcome.";get supportingText(){return this.#e}set supportingText(t){this.#e=t}#s;get titaniumChipMultiSelect(){return this.#s}set titaniumChipMultiSelect(t){this.#s=t}static{this.styles=[i,e,s`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: grid;
        gap: 12px;
        margin: 24px 0 36px 0;
        resize: both;
        overflow: hidden;
      }

      button-container {
        display: flex;
        gap: 12px;
        margin-top: 12px;
        margin-bottom: 24px;
        align-self: flex-end;
      }
    `]}render(){return n`
      <h1>Default</h1>
      <p>Examples with options for supporting text, disabled, report validity, and reset</p>
      <div>
        <titanium-chip-multi-select
          demo2
          required
          label="Service Animals"
          ?hasItems=${!!this.demoItems.length}
          .supportingText=${this.supportingText??""}
          ?disabled=${this.disabled}
        >
          <md-outlined-button
            ?disabled=${this.disabled}
            @click=${async()=>{this.demoItems.push(r[this.demoItems.length%r.length]),this.requestUpdate("demoItems")}}
            >Add Animal <md-icon slot="icon">add</md-icon></md-outlined-button
          >
          ${l(this.demoItems,t=>t,(t,i)=>n`<md-input-chip
                label=${t}
                closeable
                ?disabled=${this.disabled}
                @remove=${t=>{t.preventDefault(),this.demoItems=this.demoItems.filter((t,e)=>e!==i)}}
              ></md-input-chip>`)}</titanium-chip-multi-select
        >

        <button-container>
          <md-outlined-button
            @click=${async()=>{this.supportingText=this.supportingText?null:"Service animals are welcome."}}
            >${this.supportingText?"Remove supporting text":"Set supporting text"}</md-outlined-button
          >

          <md-outlined-button
            @click=${async()=>{this.disabled=!this.disabled}}
            >${this.disabled?"Enable":"Disable"}</md-outlined-button
          >

          <md-outlined-button
            @click=${async()=>{this.titaniumChipMultiSelect.reportValidity()}}
            >Report validity</md-outlined-button
          >

          <md-outlined-button
            @click=${async()=>{this.titaniumChipMultiSelect.reset()}}
            >Reset</md-outlined-button
          >
        </button-container>
      </div>

      <h1>Filled</h1>
      <p>Example with filled variant</p>
      <div>
        <titanium-chip-multi-select
          filled
          demo2
          label="Service Animals"
          ?hasItems=${!!this.demoItems.length}
          .supportingText=${this.supportingText??""}
          ?disabled=${this.disabled}
          required
        >
          <md-filled-tonal-button
            ?disabled=${this.disabled}
            @click=${async()=>{this.demoItems.push(r[this.demoItems.length%r.length]),this.requestUpdate("demoItems")}}
          >
            Add Animal
            <md-icon slot="icon">add</md-icon>
          </md-filled-tonal-button>
          ${l(this.demoItems,t=>t,(t,i)=>n`<md-input-chip
                label=${t}
                closeable
                ?disabled=${this.disabled}
                @remove=${t=>{t.preventDefault(),this.demoItems=this.demoItems.filter((t,e)=>e!==i)}}
              ></md-input-chip>`)}</titanium-chip-multi-select
        >
      </div>
    `}};o([d()],u.prototype,"demoItems",null),o([d()],u.prototype,"disabled",null),o([d()],u.prototype,"supportingText",null),o([a("titanium-chip-multi-select[demo2]")],u.prototype,"titaniumChipMultiSelect",null),u=o([m("titanium-chip-multi-select-playground")],u);let p=class extends t{static{this.styles=[c,s``]}render(){return n`
      <story-header name="Titanium chip multi-select" className="TitaniumChipMultiSelect"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-chip-multi-select/project.json"
        ><titanium-chip-multi-select-playground></titanium-chip-multi-select-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-chip-multi-select"></api-docs>
    `}};p=o([m("titanium-chip-multi-select-demo")],p);export{p as TitaniumChipMultiSelectDemo};
