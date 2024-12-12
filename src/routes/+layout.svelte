<script>
    import { onNavigate } from '$app/navigation';
    onNavigate((navigation) => {
        if (document.startViewTransition && navigation.from?.url.href !== navigation.to?.url.href) {
            return new Promise((resolve) => {
                document.startViewTransition &&
                document.startViewTransition(async () => {
                    resolve();
                    await navigation.complete
                })
            })
        }
    })
    // Bron: https://www.youtube.com/watch?v=suuxXrMs5P4
</script>

<link rel="stylesheet" href="/global.css">

<slot></slot>
