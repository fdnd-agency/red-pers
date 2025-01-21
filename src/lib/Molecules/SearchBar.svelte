<script>
    export let placeholder;
    export let name = 'q'; 
    export let resultsPage;
    export let alwaysOpen = false;
    export let value = '';

    let searchBar;
    let searchButton;

    function handleClick(event) {
        if (searchBar.classList.contains('closed')) {
            event.preventDefault();
            searchBar.focus();
            searchBar.classList.remove('closed');
        }
    }

    function handleBlur(event) {
        if (event.relatedTarget !== searchButton) {
            searchBar.classList.add('closed');
        }
    }
</script>

<form action={resultsPage}>
    {#if alwaysOpen}
        <input placeholder={placeholder} name={name} value={value} aria-label="Search bar">
        <button type="submit" class="search-button" width="50px" height="50px">
            <img src="/search-svgrepo-com.svg" alt="search icon" width="50px" height="50px">
        </button>
    {:else}
        <input on:blur={handleBlur} on:focus={handleClick} bind:this={searchBar} class="closed" placeholder={placeholder} name={name} value={value} aria-label="Search bar">
        <button on:click={handleClick} bind:this={searchButton} type="submit" class="search-button" width="50px" height="50px">
            <img src="/search-svgrepo-com.svg" alt="search icon" width="50px" height="50px">
        </button>
    {/if}
</form>

<style>
    form {
        display: flex;
        align-items: center;
        justify-content: end;
    }

    input {
        width: var(--search-bar-width);
        background-color: var(--search-background-color);
        margin-left: calc(-2px - var(--search-bar-width));
        height: 2.5em;
        transition: width 500ms, margin-left 500ms, opacity 0s 0s;
    }

    .closed {
        width: 0;
        margin-left: 0;
        border: none;
        opacity: 0;
        transition: width 500ms, margin-left 500ms, opacity 0s 500ms;
    }

    button {
        filter: invert(1);
        background-color: var(--search-background-color);
        height: 3em;
        width: 3em;
    }

    .closed + button {
        filter: none;
    }

    img {
        width: auto;
        height: 2.3em;
    }
</style>