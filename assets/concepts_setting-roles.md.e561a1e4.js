import{_ as s,c as a,o as n,a as o}from"./app.e6be416e.js";const A=JSON.parse('{"title":"Setting Roles","description":"","frontmatter":{},"headers":[{"level":2,"title":"Composable","slug":"composable","link":"#composable","children":[]},{"level":2,"title":"Global Property","slug":"global-property","link":"#global-property","children":[]},{"level":2,"title":"Type validations","slug":"type-validations","link":"#type-validations","children":[]}],"relativePath":"concepts/setting-roles.md"}'),l={name:"concepts/setting-roles.md"},p=o(`<h1 id="setting-roles" tabindex="-1">Setting Roles <a class="header-anchor" href="#setting-roles" aria-hidden="true">#</a></h1><p>This should be the first step. When you log in or start the application, you must set the roles and permissions.</p><h2 id="composable" tabindex="-1">Composable <a class="header-anchor" href="#composable" aria-hidden="true">#</a></h2><p>You can import <code>useRole</code> composable and setting roles and permissions by methods:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRole</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">v-role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> setRoles</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> setPermissions </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useRole</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setRoles</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">moderator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setPermissions</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">can-write</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">can-edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>With composable you can do it in components, pinia / vuex stores and navigation guards.</p><h2 id="global-property" tabindex="-1">Global Property <a class="header-anchor" href="#global-property" aria-hidden="true">#</a></h2><p>You can access to global property with <code>$role</code> in the component instance.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$role</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setRoles</span><span style="color:#F07178;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">moderator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$role</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPermissions</span><span style="color:#F07178;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">can-write</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">can-edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="type-validations" tabindex="-1">Type validations <a class="header-anchor" href="#type-validations" aria-hidden="true">#</a></h2><p>Type parameters of <code>setRoles</code> and <code>setPermissions</code>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">setRoles</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">roles</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">setPermissions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">permissions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,12),e=[p];function t(r,c,D,y,F,i){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};
