<script lang="ts">
    import "@picocss/pico";
    export let data;
</script>

<nav class="container">
    <ul>
        <li><strong><a href="/">PocketCash</a></strong></li>
    </ul>
    <ul>
        {#if !data.user}
            <li><a href="/register">Register</a></li>
            <li><a href="/login" role="button">Login</a></li>
        {:else}
            <li><a href="/expenses/new" role="button">Add an expanse</a></li>
            <li>{data.user.username}</li>
                <li><a href="/logout">Logout</a></li>
        {/if}
    </ul>
</nav>
<main class="container">
    <slot />
</main>
