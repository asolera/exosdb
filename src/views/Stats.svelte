<script>
  import { onMount } from 'svelte';
  import colors from '../js/colors.js';
  import helpers from '../js/helpers.js';
  import fields from '../js/fields.js';
  import Database from '../js/database.js';

  const database = new Database();

  let errors = [];
  let data = [];
  let allStatsMinMax = {};
  let sortField = '';
  let sortAscending = false;
  
  onMount(async () => {
    let res = await database.getData();
    data = res.data;
    errors = res.errors;

    allStatsMinMax = database.getAllStatsMinMax(data);
  });

  const getStyle = (fieldName, value, reverseGradient = false) => {
    value = parseFloat(value);
    const responsePrefix = 'background-color: ';
    let color = '';
    const percent = helpers.calcPercent(allStatsMinMax[fieldName].min, allStatsMinMax[fieldName].max, value);

    if (!reverseGradient) {
      color = colors.getColorGradient(percent, colors.red, colors.yellow, colors.green);
    } else {
      color = colors.getColorGradient(percent, colors.green, colors.yellow, colors.red);
    }

    return responsePrefix + color;
  };

  const getCustomStyle = (fieldName, value) => {
    const responsePrefix = 'background-color: ';
    let color = '';

    switch (fieldName) {
      case 'tier':
        switch(value) {
          case 'Fated':
            color = 'var(--fated)';
            break;
          case 'Legendary':
            color = 'var(--legendary)';
            break;
          case 'Rare':
            color = 'var(--rare)';
            break;
          case 'Magical':
            color = 'var(--magical)';
            break;
          case 'Common':
            color = 'var(--common)';
            break;
        }
        break;
      case 'element':
        switch(value) {
          case 'Darkness':
            color = 'var(--legendary)';
            break;
          case 'Fire':
            color = 'var(--red)';
            break;
          case 'Frost':
            color = 'var(--rare)';
            break;
          case 'Nature':
            color = 'var(--magical)';
            break;
          case 'Light':
            color = 'var(--shiny)';
            break;
          case 'Machine':
            color = 'var(--light-gray)';
            break;
        }
        break;
    }

    return responsePrefix + color;
  };

  const sortBy = (fieldName) => {
    if (sortField != fieldName) {
      sortField = fieldName;
      sortAscending = true;
    } else {
      sortAscending = !sortAscending;
    }
  };

  $: if (sortField) data = sortAscending ?
                              data.sort((a, b) => {
                                if (parseFloat(a[sortField])) {
                                  return parseFloat(a[sortField]) > parseFloat(b[sortField]) ? 1 : -1
                                } else {
                                  return a[sortField] > b[sortField] ? 1 : -1
                                }
                              }) :
                              data.sort((a, b) => {
                                if (parseFloat(a[sortField])) {
                                  return parseFloat(a[sortField]) < parseFloat(b[sortField]) ? 1 : -1
                                } else {
                                  return a[sortField] < b[sortField] ? 1 : -1
                                }
                              })

</script>

<style>
  section{
    display: flex;
    height: 100%;
    overflow: auto;
  }

  .error {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray);
    font-weight: bold;
    font-size: 1.5em;
    text-shadow: 2px 2px 5px var(--red);
  }
  

  table {
    margin: 0;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 0.25em 0.5em 0.25em 1em;
    text-align: center;
    text-indent: -0.5em;
  }
  
  tr:nth-child(even) th[scope=row] {
    background-color: #f2f2f2;
  }

  tr:nth-child(odd) th[scope=row] {
    background-color: #fff;
  }

  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  tr:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  th[scope=row] {
    vertical-align: top;
    color: inherit;
    background: linear-gradient(90deg, transparent 0%, transparent calc(100% - .05em), #d6d6d6 calc(100% - .05em), #d6d6d6 100%);
    position: sticky;
    left: 0;
    z-index: 1;
  }

  td,
  th[scope=row] {
    white-space: nowrap;
  }

  td:nth-child(1),
  th:nth-child(1) {
    text-align: left !important;
  }

  th {
    vertical-align: bottom;
    background-color: #666;
    color: #fff;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    cursor: pointer;
    white-space: nowrap;
  }

  tr:nth-child(odd) th[scope=row] {
    background-color: #fff;
  }

  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  tr:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  table:nth-of-type(2) th:not([scope=row]):first-child {
    left: 0;
    z-index: 3;
    background: linear-gradient(90deg, #666 0%, #666 calc(100% - .05em), #ccc calc(100% - .05em), #ccc 100%);
  }

  tbody tr:hover {
    border: 2px solid var(--gray);
    box-shadow: -2px 2px 5px var(--shiny), 2px -2px 5px var(--shiny);
    z-index: 1;
  }

  .sorted {
    color: var(--yellow);
    text-shadow: -2px 2px 5px var(--gray), 2px -2px 5px var(--gray);
  }
</style>

<section>
  {#if errors.length > 0}
    <div class="error">There was an error while importing database!</div>
  {:else}
    <table style="display: none;"></table>
    <table class="hero-table">
      <thead>
        <tr>
          {#each fields as field}
            <th class:sorted={sortField == field.name} on:click={() => sortBy(field.name)}>
              {field.label}
              {#if sortField == field.name && sortAscending}
                ⬆
              {:else if sortField == field.name && !sortAscending}
                ⬇
              {/if}
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each data as hero}
          <tr>
            {#each fields as field, i}
              <!-- Fixes first column -->
              {#if i == 0}
                <th scope="row">{hero[field.name]}</th>
              <!-- Apply gradient colors (if exists) -->
              {:else if field.gradient == true}
                <td style={getStyle(field.name, hero[field.name], field.reverse)}>
                  {hero[field.name]}
                </td>
              <!-- Apply custom colors (if exists) -->
              {:else if field.customColor == true}
                <td style={getCustomStyle(field.name, hero[field.name])}>
                  {hero[field.name]}
                </td>
              <!-- or else, just show the values -->
              {:else}
                <td>{hero[field.name]}</td>
              {/if}
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</section>