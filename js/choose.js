/**
 * Created by xiaoxiang on 2015/11/5.
 */
$(document).ready(function(){
		$('.btn_choose').click(function(){
				$(".curtain").show()
		})
		$(".btn-close").click(function(){
				$('.curtain').toggle()
		})
		$('.swiper-slide').bind('touchend',imgAnim);
		function a(){
				$('.swiper-slide').children('a').children('img').removeClass();
				$('.swing img:eq(1)').removeClass('anim')
		}
		function imgAnim(){
				console.log($(this).children('a').children('img'));
				$('.swiper-slide').children('a').children('img').addClass('anim');
				$('.swiper-slide').children('a').children('img').bind('webkitAnimationEnd',a);
				$('.swing img:eq(1)').addClass('anim').bind('webkitAnimationEnd',a);
		}
})