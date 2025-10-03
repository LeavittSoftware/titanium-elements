import{i as t,h as i,p as e,c as s,D as l,x as o,_ as n,r as d,e as a,t as m}from"./CIAkX42C.js";import{S as r}from"./DzDchJdO.js";import"./kwKBK7yw.js";import"./BQTebtbQ.js";import"./D8Gv_ug3.js";import"./ARW3F0re.js";const c=["Dog","Cat","Lion","Hedgehog","Turtle","Monkey","Owl","Peacock","Pigeon","Spider","Tortoise","Zebra"];let u=class extends t{#t=c.slice(0,4);get demoItems(){return this.#t}set demoItems(t){this.#t=t}#i=!1;get disabled(){return this.#i}set disabled(t){this.#i=t}#e="Service animals are welcome.";get supportingText(){return this.#e}set supportingText(t){this.#e=t}#s;get titaniumChipMultiSelect(){return this.#s}set titaniumChipMultiSelect(t){this.#s=t}static{this.styles=[i,e,s`
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
            @click=${async()=>{this.demoItems.push(c[this.demoItems.length%c.length]),this.requestUpdate("demoItems")}}
            >Add Animal <md-icon slot="icon">add</md-icon></md-outlined-button
          >
          ${l(this.demoItems,t=>t,(t,i)=>o`<md-input-chip
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
            @click=${async()=>{this.demoItems.push(c[this.demoItems.length%c.length]),this.requestUpdate("demoItems")}}
          >
            Add Animal
            <md-icon slot="icon">add</md-icon>
          </md-filled-tonal-button>
          ${l(this.demoItems,t=>t,(t,i)=>o`<md-input-chip
                label=${t}
                closeable
                ?disabled=${this.disabled}
                @remove=${t=>{t.preventDefault(),this.demoItems=this.demoItems.filter((t,e)=>e!==i)}}
              ></md-input-chip>`)}</titanium-chip-multi-select
        >
      </div>
    `}};n([d()],u.prototype,"demoItems",null),n([d()],u.prototype,"disabled",null),n([d()],u.prototype,"supportingText",null),n([a("titanium-chip-multi-select[demo2]")],u.prototype,"titaniumChipMultiSelect",null),u=n([m("titanium-chip-multi-select-playground")],u);let p=class extends t{static{this.styles=[r,s``]}render(){return o`
      <story-header name="Titanium chip multi-select" className="TitaniumChipMultiSelect"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-chip-multi-select/project.json"
        ><titanium-chip-multi-select-playground></titanium-chip-multi-select-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-chip-multi-select"></api-docs>
    `}};p=n([m("titanium-chip-multi-select-demo")],p);export{p as TitaniumChipMultiSelectDemo};
