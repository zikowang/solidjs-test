/** @format */

import { Link, useParams } from "solid-app-router";
import { Component, createResource, For, Show } from "solid-js";

import { AlbumModel, PhotoModel } from "../../interfaces/photo";

const Album: Component = () => {
  const params = useParams();

  const [album] = createResource<AlbumModel>(
    () =>
      fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`).then((res) => res.json()),
    {
      initialValue: null,
    }
  );

  const [photos] = createResource<PhotoModel[]>(
    () =>
      fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`).then((res) =>
        res.json()
      ),
    {
      initialValue: [],
    }
  );

  return (
    <div>
      <h1>Album</h1>
      <div class="py-2">
        <Show when={!album.loading} fallback={<div>Loading Post</div>}>
          <>
            <div class="mb-10">
              <Link href="/" class="font-bold">
                back
              </Link>
            </div>
            <div class="my-5 p-5 bg-gray-500">
              <div class="font-bold mb-5">{album()?.title}</div>
            </div>
          </>
        </Show>
        <h2>Photos</h2>
        <Show when={!photos.loading} fallback={<div>Loading photos</div>}>
          <div class="grid gap-4 grid-cols-3">
            <For each={photos()}>
              {(photo) => (
                <div class="flex flex-col justify-center my-5 p-5 border border-gray-500">
                  <div class="font-bold h-20">{photo.title}</div>
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
};

export default Album;
