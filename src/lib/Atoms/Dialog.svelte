<script>
  import { onMount } from "svelte";

    let dialog;

    function openDialog() {
        dialog.showModal();
    }

    function closeDialog() {
        dialog.close();
    }

    onMount(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 860) {
                dialog.close();
            }
        })
    })
</script>

<button on:click={openDialog} class="open-button">
    <slot name="button"></slot>
</button>
<dialog bind:this={dialog}>
    <slot name="content"></slot>
    <button on:click={closeDialog} class="close-button">&times;</button>
</dialog>

<style>
    button.open-button, button.open-button:hover {
        background: none;
        color: unset;
        font-size: 16px;
        padding: 0;
    }

    dialog {
        position: fixed;
        left: 50vw;
        top: 50vh;
        transform: translate(-50%, -50%);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
    }

    .close-button {
        position: absolute;
        top: 0; 
        right: 0; 
        font-size: 1.5rem;
        cursor: pointer;
        border: none;
        background: none;
    }
</style>