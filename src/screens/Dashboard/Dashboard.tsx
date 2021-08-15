/** @format */

import { Link } from "solid-app-router";
import { Component, createResource, For, Show } from "solid-js";

import { AlbumModel } from "../../interfaces/photo";

const Dashboard: Component = () => {
  const [albums] = createResource<AlbumModel[]>(
    () => fetch("https://jsonplaceholder.typicode.com/albums").then((res) => res.json()),
    {
      initialValue: [],
    }
  );

  return (
    <div>
      <h1>Albums</h1>
      <Show when={!albums.loading} fallback={<div>Loading</div>}>
        <div class="grid gap-4 grid-cols-3">
          <For each={albums()}>
            {(album) => (
              <Link
                href={`/album/${album.id}`}
                class="flex flex-col justify-center items-center text-center py-10 bg-gray-500 hover:bg-gray-400"
              >
                <div class="font-bold">{album.title}</div>
              </Link>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default Dashboard;
