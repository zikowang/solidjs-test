/** @format */

import { Link } from "solid-app-router";
import { Component, createEffect, createResource, For, Show } from "solid-js";

import { PostModel } from "../../interfaces/post";

const Posts: Component = () => {
  const [posts] = createResource<PostModel[]>(
    () => fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
    {
      initialValue: [],
    }
  );

  return (
    <div>
      <h1>Posts</h1>
      <Show when={!posts.loading} fallback={<div>Loading</div>}>
        <For each={posts()}>
          {(post) => (
            <Link href={`${post.id}`} class="flex flex-col my-5 p-5 bg-gray-500 hover:bg-gray-400">
              <div class="font-bold">{post.title}</div>
              <div class="italic mt-5">{post.body}</div>
            </Link>
          )}
        </For>
      </Show>
    </div>
  );
};

export default Posts;
