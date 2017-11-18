$("#alert-target").click( () => {
    toastr["info"]("I was launched via jQuery!")
});

$( () => {
    $(".sticky").sticky({
        topSpacing: 90
        , zIndex: 2
        , stopper: "#YourStopperId"
    });
});
