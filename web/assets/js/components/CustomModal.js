export default {
  name: "CustomModal",
  props:['ativo'],
  mounted(){
    this.modalAtivo = this.ativo;
  },
  data() {
    return {
      modalAtivo: false
    }
  },
  methods:{
    outModal({target,currentTarget}){
      if(target === currentTarget) this.modalAtivo = false
      this.$parent.programStats = 'Aguardando link ...'
      this.$parent.download.downloaded = false
      this.$parent.download.downloading = false
    },
    closeModal(){
      this.modalAtivo = false
    },
    openModal(){
      this.modalAtivo = true
    }
  },
  template:
    `
    <div>
      <transition name="modal">
        <section class="modal" v-if="modalAtivo" @click="outModal">
          <div class="modal_container">
            <button class="modal_close" @click='closeModal'>X</button>
            <slot></slot>
          </div>
        </section>
      </transition>
    </div>
    `
}