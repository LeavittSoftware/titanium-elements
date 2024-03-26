import{s as t,h as i,p as e,i as s,x as o,_ as l,r as n,e as a,t as r}from"./f43924bd.js";import{S as m}from"./1c8b19cb.js";import"./3286da59.js";import{c as d}from"./35db0734.js";import"./5bcb9e93.js";import"./5c3aab95.js";import"./68491de3.js";import"./d49dec57.js";import"./2f3f6766.js";import"./75986af6.js";import"./72abf9b4.js";const u=["Dog","Cat","Lion","Hedgehog","Turtle","Monkey","Owl","Peacock","Pigeon","Spider","Tortoise","Zebra"];let c=class extends t{#t=u.slice(0,4);get demoItems(){return this.#t}set demoItems(t){this.#t=t}#i=!1;get disabled(){return this.#i}set disabled(t){this.#i=t}#e="Service animals are welcome.";get supportingText(){return this.#e}set supportingText(t){this.#e=t}#s;get titaniumChipMultiSelect(){return this.#s}set titaniumChipMultiSelect(t){this.#s=t}static{this.styles=[i,e,s`
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
    `]}render(){return o`
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
            @click=${async()=>{this.demoItems.push(u[this.demoItems.length%u.length]),this.requestUpdate("demoItems")}}
            >Add Animal <md-icon slot="icon">add</md-icon></md-outlined-button
          >
          ${d(this.demoItems,(t=>t),((t,i)=>o`<md-input-chip
                label=${t}
                closeable
                ?disabled=${this.disabled}
                @remove=${t=>{t.preventDefault(),this.demoItems=this.demoItems.filter(((t,e)=>e!==i))}}
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
    `}};l([n()],c.prototype,"demoItems",null),l([n()],c.prototype,"disabled",null),l([n()],c.prototype,"supportingText",null),l([a("titanium-chip-multi-select[demo2]")],c.prototype,"titaniumChipMultiSelect",null),c=l([r("titanium-chip-multi-select-playground")],c);let p=class extends t{static{this.styles=[m,s``]}render(){return o`
      <story-header name="Titanium chip multi-select" className="TitaniumChipMultiSelect"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-chip-multi-select/project.json"
        ><titanium-chip-multi-select-playground></titanium-chip-multi-select-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-chip-multi-select"></api-docs>
    `}};p=l([r("titanium-chip-multi-select-demo")],p);export{p as TitaniumChipMultiSelectDemo};
