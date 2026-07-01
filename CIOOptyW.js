import{i as t,b as i,y as e,c as s,_ as l,r as a,e as n,t as o}from"./D_imZRq6.js";import{S as c}from"./Cp0ERCaT.js";import"./Cr5T8rNp.js";import"./BrugqwTk.js";const m=["Dog","Cat","Lion","Hedgehog","Turtle","Monkey","Owl","Peacock","Pigeon","Spider","Tortoise","Zebra"];let d=class extends t{#t=m.slice(0,4);get demoItems(){return this.#t}set demoItems(t){this.#t=t}#i=!1;get disabled(){return this.#i}set disabled(t){this.#i=t}#e="Service animals are welcome.";get supportingText(){return this.#e}set supportingText(t){this.#e=t}#s;get titaniumChipMultiSelect(){return this.#s}set titaniumChipMultiSelect(t){this.#s=t}static{this.styles=[c,i`
      titanium-chip-multi-select {
        margin-bottom: 24px;
      }

      section[actions] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `]}render(){return s`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium chip multi select" level1Href="/titanium-chip-multi-select" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium chip multi select" className="TitaniumChipMultiSelect"></story-header>

            <div>
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
                >
                  Add Animal
                  <md-icon slot="icon">add</md-icon>
                </md-filled-tonal-button>
                ${e(this.demoItems,t=>t,(t,i)=>s`<md-input-chip
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
                  @click=${async()=>{this.titaniumChipMultiSelect.reportValidity()}}
                  >Report validity</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${async()=>{this.titaniumChipMultiSelect.reset()}}
                  >Reset</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-chip-multi-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};l([a()],d.prototype,"demoItems",null),l([a()],d.prototype,"disabled",null),l([a()],d.prototype,"supportingText",null),l([n("titanium-chip-multi-select")],d.prototype,"titaniumChipMultiSelect",null),d=l([o("titanium-chip-multi-select-demo")],d);export{d as TitaniumChipMultiSelectDemo};
