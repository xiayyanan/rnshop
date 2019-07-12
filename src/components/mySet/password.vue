<template>
	<div id="mySet">
		<ul class="form-list f-list-mt10">
			<li class="item">
				<span class="name">旧<em class="spacep"></em>密<em class="spacep"></em>码</span>
				<input type="text" class="txt" value="" placeholder="请输入旧密码">
			</li>
			<li class="item">
				<span class="name">新<em class="spacep"></em>密<em class="spacep"></em>码</span>
				<div class="input-box">
					<input type="text" class="txt" value="" placeholder="请输入新密码">
				</div>
			</li>
			<li class="item">
				<span class="name">确认密码</span>
				<div class="input-box">
					<input type="text" class="txt" value="" placeholder="请再次输入密码">
				</div>
			</li>
		</ul>

		<div class="btn-box">
			<button class="btn">保存</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped="scoped">
	@import "../../assets/css/form-list.css";
</style>