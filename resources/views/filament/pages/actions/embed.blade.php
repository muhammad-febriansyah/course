@php
    // Check if link_overview is a JSON string, if it's already an array, no need to decode
$linkOverview = is_string($record->link_overview)
    ? json_decode($record->link_overview, true) // Decode to an array if it's a string
        : $record->link_overview; // Use it directly if it's already an array
@endphp

<iframe width="100%" height="400px" class="rounded-lg" src="{{ $linkOverview['embed_url'] ?? '' }}"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
