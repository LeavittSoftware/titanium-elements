import{i as t,b as i,C as e,c as l,_ as s,r as a,e as n,t as c}from"./BkdWKSMI.js";import{S as o}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";const m=["Dog","Cat","Lion","Hedgehog","Turtle","Monkey","Owl","Peacock","Pigeon","Spider","Tortoise","Zebra"];let d=class extends t{#t=m.slice(0,4);get demoItems(){return this.#t}set demoItems(t){this.#t=t}#i=!1;get disabled(){return this.#i}set disabled(t){this.#i=t}#e="Service animals are welcome.";get supportingText(){return this.#e}set supportingText(t){this.#e=t}#l;get titaniumChipMultiSelect(){return this.#l}set titaniumChipMultiSelect(t){this.#l=t}#s;get titaniumChipMultiSelectFilled(){return this.#s}set titaniumChipMultiSelectFilled(t){this.#s=t}static{this.styles=[o,i`
      titanium-chip-multi-select {
        margin-bottom: 24px;
      }

      section[actions] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `]}render(){return l`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium chip multi select" level1Href="/titanium-chip-multi-select" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium chip multi select" className="TitaniumChipMultiSelect"></story-header>

            <div>
              <h1>Default</h1>
              <titanium-chip-multi-select
                required
                label="Service Animals"
                ?hasItems=${!!this.demoItems.length}
                .supportingText=${this.supportingText??""}
                ?disabled=${this.disabled}
              >
                <md-filled-tonal-button
                  ?disabled=${this.disabled}
                  @click=${async()=>{this.demoItems.push(m[this.demoItems.length%m.length]),this.requestUpdate("demoItems")}}
                  >Add Animal <md-icon slot="icon">add</md-icon></md-filled-tonal-button
                >
                ${e(this.demoItems,t=>t,(t,i)=>l`<md-input-chip
                      label=${t}
                      closeable
                      ?disabled=${this.disabled}
                      @remove=${t=>{t.preventDefault(),this.demoItems=this.demoItems.filter((t,e)=>e!==i)}}
                    ></md-input-chip>`)}</titanium-chip-multi-select
              >

              <h1>Filled</h1>
              <titanium-chip-multi-select
                filled
                label="Service Animals"
                ?hasItems=${!!this.demoItems.length}
                .supportingText=${this.supportingText??""}
                ?disabled=${this.disabled}
                required
              >
                <md-filled-tonal-button
                  ?disabled=${this.disabled}
                  @click=${async()=>{this.demoItems.push(m[this.demoItems.length%m.length]),this.requestUpdate("demoItems")}}
                >
                  Add Animal
                  <md-icon slot="icon">add</md-icon>
                </md-filled-tonal-button>
                ${e(this.demoItems,t=>t,(t,i)=>l`<md-input-chip
                      label=${t}
                      closeable
                      ?disabled=${this.disabled}
                      @remove=${t=>{t.preventDefault(),this.demoItems=this.demoItems.filter((t,e)=>e!==i)}}
                    ></md-input-chip>`)}</titanium-chip-multi-select
              >

              <section actions>
                <md-filled-tonal-button
                  @click=${async()=>{this.supportingText=this.supportingText?null:"Service animals are welcome."}}
                  >${this.supportingText?"Remove supporting text":"Set supporting text"}</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${async()=>{this.disabled=!this.disabled}}
                  >${this.disabled?"Enable":"Disable"}</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${async()=>{this.titaniumChipMultiSelect.reportValidity(),this.titaniumChipMultiSelectFilled.reportValidity()}}
                  >Report validity</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${async()=>{this.titaniumChipMultiSelect.reset(),this.titaniumChipMultiSelectFilled.reset()}}
                  >Reset</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-chip-multi-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};s([a()],d.prototype,"demoItems",null),s([a()],d.prototype,"disabled",null),s([a()],d.prototype,"supportingText",null),s([n("titanium-chip-multi-select")],d.prototype,"titaniumChipMultiSelect",null),s([n("titanium-chip-multi-select[filled]")],d.prototype,"titaniumChipMultiSelectFilled",null),d=s([c("titanium-chip-multi-select-demo")],d);export{d as TitaniumChipMultiSelectDemo};
