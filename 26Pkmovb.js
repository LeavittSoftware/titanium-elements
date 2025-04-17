import{i as t,h as e,p as i,c as s,B as l,x as n,_ as o,r as a,e as d,t as r}from"./9VdYylXu.js";import{S as u}from"./CHIVE7-D.js";import"./DV-lBPLw.js";const c=["Dog","Cat","Lion","Hedgehog","Turtle","Monkey","Owl","Peacock","Pigeon","Spider","Tortoise","Zebra"];let m=class extends t{#t=c.slice(0,4);get demoItems(){return this.#t}set demoItems(t){this.#t=t}#e=!1;get disabled(){return this.#e}set disabled(t){this.#e=t}#i="Service animals are welcome.";get supportingText(){return this.#i}set supportingText(t){this.#i=t}#s;get titaniumChipMultiSelect(){return this.#s}set titaniumChipMultiSelect(t){this.#s=t}static{this.styles=[e,i,s`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
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
            @click=${async()=>{this.demoItems.push(c[this.demoItems.length%c.length]),this.requestUpdate("demoItems")}}
            >Add Animal <md-icon slot="icon">add</md-icon></md-outlined-button
          >
          ${l(this.demoItems,(t=>t),((t,e)=>n`<md-input-chip
                label=${t}
                closeable
                ?disabled=${this.disabled}
                @remove=${t=>{t.preventDefault(),this.demoItems=this.demoItems.filter(((t,i)=>i!==e))}}
              ></md-input-chip>`))}</titanium-chip-multi-select
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
    `}};o([a()],m.prototype,"demoItems",null),o([a()],m.prototype,"disabled",null),o([a()],m.prototype,"supportingText",null),o([d("titanium-chip-multi-select[demo2]")],m.prototype,"titaniumChipMultiSelect",null),m=o([r("titanium-chip-multi-select-playground")],m);let p=class extends t{static{this.styles=[u,s``]}render(){return n`
      <story-header name="Titanium chip multi-select" className="TitaniumChipMultiSelect"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-chip-multi-select/project.json"
        ><titanium-chip-multi-select-playground></titanium-chip-multi-select-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-chip-multi-select"></api-docs>
    `}};p=o([r("titanium-chip-multi-select-demo")],p);export{p as TitaniumChipMultiSelectDemo};
