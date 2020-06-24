<script>
  export let activeMode = 'sort';
  export let searchTerm = '';

  const toggleMode = (mode) => activeMode = mode;
</script>

<style>
  .filter-bar {
    display: flex;
    justify-content: space-between;
    background-color: var(--dark-blue);
    color: var(--light);
    width: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
  }

  .active {
    color: var(--yellow);
    font-weight: bold;
  }

  .mode {
    cursor: pointer;
  }
</style>

<div class="filter-bar">
  <input type="text" placeholder="Filter by hero name..." bind:value={searchTerm} />
  <div class="filter-mode">
    <span class:active={activeMode == 'sort'} class="mode" on:click={() => toggleMode('sort')}>Sort Mode</span> / 
    <span class:active={activeMode == 'filter'} class="mode" on:click={() => toggleMode('filter')}>Filter Mode</span>
  </div>
</div>