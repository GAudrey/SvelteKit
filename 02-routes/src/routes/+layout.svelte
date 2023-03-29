<script>
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";
</script>

<Header />

<slot />

<Footer />

<!-- <header class="layout-header">Header</header>

<slot />

<footer class="layout-footer">Footer</footer>

<style>
    .layout-header {
        background: #264653;
        color: orange;
        font-size: 30px;
        text-align: center;
        padding: 10px;
        margin-bottom: 10px;
    }
    .layout-footer {
        background: #264653;
        color: orangered;
        font-size: 30px;
        text-align: center;
        padding: 10px;
        margin-bottom: 10px;
    }
</style> -->