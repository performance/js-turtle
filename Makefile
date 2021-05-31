all: కుంచిక.html gifs


# use the headers from index.html to update headers in other files
# కుంచిక.html does not have the header
# overview.html is linked to index.html (the default file loaded)
కుంచికHeaderDummy : about.html \
                    animation.html \
                    examples.html \
                    guide.html \
                    javascript.html \
                    nerd.html \
                    reference.html \
                    tutorial.html
	/bin/bash bin/syncHeader.sh $?;\
	touch కుంచికHeaderDummy


# see if links in files are OK
linkTestDummy :  bin/checkLinks.sh \
                 కుంచికHeaderDummy
	/bin/bash bin/checkLinks.sh;\
	touch linkTestDummy


# update the example strings if any example has changed
examples.js :   examples/*.js\
                bin/buildJsStrings.sh
	/bin/bash bin/buildJsStrings.sh examples


# update the కుంచిక.html if the examples strings has changed
కుంచిక.html :   linkTestDummy \
                కుంచికHeaderDummy \
                examples.js \
                bin/modifyHTML.sh
	/bin/bash bin/modifyHTML.sh examples

buildJsStrings.sh :
	echo "Changes to buildJsStrings.sh have now been applied"

# build the animated gif files
gifs : images/color_changing_dots.gif \
       images/conway_fractal_generation.gif \
       images/conway_pinwheel_divide_generation.gif \
       images/conway_pinwheel_expand_generation.gif \
       images/dividing_a_circle.gif \
       images/dragon_curve.gif \
       images/fibanocci_sequence.gif \
       images/gosper_curve_generation.gif \
       images/hilbert_curve_generation.gif \
       images/intersection_simulator.gif \
       images/jumping_jack.gif \
       images/koch_line.gif \
       images/koch_snowflake.gif \
       images/life_pentathalon.gif \
       images/nested_squares.gif \
       images/polygon.gif \
       images/sierpinski_curve_order.gif \
       images/sierpinski_triangle_order.gif \
       images/sliding_block.gif \
       images/square.gif \
       images/star_burst.gif

# build an individual .gif file from series of .png files
# individual commands here allow for customizing the delay
images/color_changing_dots.gif :\
		image_series/color_changing_dots_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/conway_fractal_generation.gif :\
		image_series/conway_fractal_generation_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort)  $@

images/conway_pinwheel_divide_generation.gif :\
		image_series/conway_pinwheel_divide_generation_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/conway_pinwheel_expand_generation.gif :\
		image_series/conway_pinwheel_expand_generation_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/dividing_a_circle.gif :\
		image_series/dividing_a_circle_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/dragon_curve.gif :\
		image_series/dragon_curve_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/fibanocci_sequence.gif :\
		image_series/fibanocci_sequence_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/gosper_curve_generation.gif :\
		image_series/gosper_curve_generation_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/hilbert_curve_generation.gif :\
		image_series/hilbert_curve_generation_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/intersection_simulator.gif :\
		image_series/intersection_simulator_*.png
	convert -delay 200 -loop 0 $(shell ls $^ | sort) $@

images/jumping_jack.gif : \
		image_series/jumping_jack_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/koch_line.gif :\
		image_series/koch_line_order_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/koch_snowflake.gif :\
		image_series/koch_snowflake_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/life_pentathalon.gif :\
		image_series/life_pentathalon_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/nested_squares.gif :\
		image_series/nested_squares_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/polygon.gif :\
		image_series/polygon_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/sierpinski_curve_order.gif :\
		image_series/sierpinski_curve_order_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/sierpinski_triangle_order.gif :\
		image_series/sierpinski_triangle_order_*.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

image_series/sliding_block_00a.png : image_series/sliding_block_00.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_01a.png : image_series/sliding_block_01.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_02a.png : image_series/sliding_block_02.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_03a.png : image_series/sliding_block_03.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_04a.png : image_series/sliding_block_04.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_05a.png : image_series/sliding_block_05.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_06a.png : image_series/sliding_block_06.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_07a.png : image_series/sliding_block_07.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_08a.png : image_series/sliding_block_08.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_09a.png : image_series/sliding_block_09.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_10a.png : image_series/sliding_block_10.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_11a.png : image_series/sliding_block_11.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_12a.png : image_series/sliding_block_12.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_13a.png : image_series/sliding_block_13.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_14a.png : image_series/sliding_block_14.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_15a.png : image_series/sliding_block_15.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_16a.png : image_series/sliding_block_16.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_17a.png : image_series/sliding_block_17.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_18a.png : image_series/sliding_block_18.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_19a.png : image_series/sliding_block_19.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_20a.png : image_series/sliding_block_20.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_21a.png : image_series/sliding_block_21.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_22a.png : image_series/sliding_block_22.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_23a.png : image_series/sliding_block_23.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_24a.png : image_series/sliding_block_24.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_25a.png : image_series/sliding_block_25.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_26a.png : image_series/sliding_block_26.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_27a.png : image_series/sliding_block_27.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_28a.png : image_series/sliding_block_28.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_29a.png : image_series/sliding_block_29.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_30a.png : image_series/sliding_block_30.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_31a.png : image_series/sliding_block_31.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_32a.png : image_series/sliding_block_32.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_33a.png : image_series/sliding_block_33.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_34a.png : image_series/sliding_block_34.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_35a.png : image_series/sliding_block_35.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_36a.png : image_series/sliding_block_36.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_37a.png : image_series/sliding_block_37.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_38a.png : image_series/sliding_block_38.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_39a.png : image_series/sliding_block_39.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_40a.png : image_series/sliding_block_40.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_41a.png : image_series/sliding_block_41.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_42a.png : image_series/sliding_block_42.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_43a.png : image_series/sliding_block_43.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_44a.png : image_series/sliding_block_44.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_45a.png : image_series/sliding_block_45.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_46a.png : image_series/sliding_block_46.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_47a.png : image_series/sliding_block_47.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_48a.png : image_series/sliding_block_48.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_49a.png : image_series/sliding_block_49.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_50a.png : image_series/sliding_block_50.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_51a.png : image_series/sliding_block_51.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_52a.png : image_series/sliding_block_52.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_53a.png : image_series/sliding_block_53.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_54a.png : image_series/sliding_block_54.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_55a.png : image_series/sliding_block_55.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_56a.png : image_series/sliding_block_56.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_57a.png : image_series/sliding_block_57.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_58a.png : image_series/sliding_block_58.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_59a.png : image_series/sliding_block_59.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_60a.png : image_series/sliding_block_60.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_61a.png : image_series/sliding_block_61.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_62a.png : image_series/sliding_block_62.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_63a.png : image_series/sliding_block_63.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_64a.png : image_series/sliding_block_64.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_65a.png : image_series/sliding_block_65.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_66a.png : image_series/sliding_block_66.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_67a.png : image_series/sliding_block_67.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_68a.png : image_series/sliding_block_68.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_69a.png : image_series/sliding_block_69.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_70a.png : image_series/sliding_block_70.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_71a.png : image_series/sliding_block_71.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_72a.png : image_series/sliding_block_72.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_73a.png : image_series/sliding_block_73.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_74a.png : image_series/sliding_block_74.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_75a.png : image_series/sliding_block_75.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_76a.png : image_series/sliding_block_76.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_77a.png : image_series/sliding_block_77.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_78a.png : image_series/sliding_block_78.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_79a.png : image_series/sliding_block_79.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_80a.png : image_series/sliding_block_80.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_81a.png : image_series/sliding_block_81.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_82a.png : image_series/sliding_block_82.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_83a.png : image_series/sliding_block_83.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_84a.png : image_series/sliding_block_84.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_85a.png : image_series/sliding_block_85.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_86a.png : image_series/sliding_block_86.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_87a.png : image_series/sliding_block_87.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_88a.png : image_series/sliding_block_88.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_89a.png : image_series/sliding_block_89.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/sliding_block_90a.png : image_series/sliding_block_90.png
	convert -background "#FFFFFF" -flatten $^ $@

images/sliding_block.gif :\
		image_series/sliding_block_00a.png \
		image_series/sliding_block_01a.png \
		image_series/sliding_block_02a.png \
		image_series/sliding_block_03a.png \
		image_series/sliding_block_04a.png \
		image_series/sliding_block_05a.png \
		image_series/sliding_block_06a.png \
		image_series/sliding_block_07a.png \
		image_series/sliding_block_08a.png \
		image_series/sliding_block_09a.png \
		image_series/sliding_block_10a.png \
		image_series/sliding_block_11a.png \
		image_series/sliding_block_12a.png \
		image_series/sliding_block_13a.png \
		image_series/sliding_block_14a.png \
		image_series/sliding_block_15a.png \
		image_series/sliding_block_16a.png \
		image_series/sliding_block_17a.png \
		image_series/sliding_block_18a.png \
		image_series/sliding_block_19a.png \
		image_series/sliding_block_20a.png \
		image_series/sliding_block_21a.png \
		image_series/sliding_block_22a.png \
		image_series/sliding_block_23a.png \
		image_series/sliding_block_24a.png \
		image_series/sliding_block_25a.png \
		image_series/sliding_block_26a.png \
		image_series/sliding_block_27a.png \
		image_series/sliding_block_28a.png \
		image_series/sliding_block_29a.png \
		image_series/sliding_block_30a.png \
		image_series/sliding_block_31a.png \
		image_series/sliding_block_32a.png \
		image_series/sliding_block_33a.png \
		image_series/sliding_block_34a.png \
		image_series/sliding_block_35a.png \
		image_series/sliding_block_36a.png \
		image_series/sliding_block_37a.png \
		image_series/sliding_block_38a.png \
		image_series/sliding_block_39a.png \
		image_series/sliding_block_40a.png \
		image_series/sliding_block_41a.png \
		image_series/sliding_block_42a.png \
		image_series/sliding_block_43a.png \
		image_series/sliding_block_44a.png \
		image_series/sliding_block_45a.png \
		image_series/sliding_block_46a.png \
		image_series/sliding_block_47a.png \
		image_series/sliding_block_48a.png \
		image_series/sliding_block_49a.png \
		image_series/sliding_block_50a.png \
		image_series/sliding_block_51a.png \
		image_series/sliding_block_52a.png \
		image_series/sliding_block_53a.png \
		image_series/sliding_block_54a.png \
		image_series/sliding_block_55a.png \
		image_series/sliding_block_56a.png \
		image_series/sliding_block_57a.png \
		image_series/sliding_block_58a.png \
		image_series/sliding_block_59a.png \
		image_series/sliding_block_60a.png \
		image_series/sliding_block_61a.png \
		image_series/sliding_block_62a.png \
		image_series/sliding_block_63a.png \
		image_series/sliding_block_64a.png \
		image_series/sliding_block_65a.png \
		image_series/sliding_block_66a.png \
		image_series/sliding_block_67a.png \
		image_series/sliding_block_68a.png \
		image_series/sliding_block_69a.png \
		image_series/sliding_block_70a.png \
		image_series/sliding_block_71a.png \
		image_series/sliding_block_72a.png \
		image_series/sliding_block_73a.png \
		image_series/sliding_block_74a.png \
		image_series/sliding_block_75a.png \
		image_series/sliding_block_76a.png \
		image_series/sliding_block_77a.png \
		image_series/sliding_block_78a.png \
		image_series/sliding_block_79a.png \
		image_series/sliding_block_80a.png \
		image_series/sliding_block_81a.png \
		image_series/sliding_block_82a.png \
		image_series/sliding_block_83a.png \
		image_series/sliding_block_84a.png \
		image_series/sliding_block_85a.png \
		image_series/sliding_block_86a.png \
		image_series/sliding_block_87a.png \
		image_series/sliding_block_88a.png \
		image_series/sliding_block_89a.png \
		image_series/sliding_block_90a.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@

images/square.gif :\
		image_series/square_0a.png \
		image_series/square_1a.png \
		image_series/square_2a.png \
		image_series/square_3a.png \
		image_series/square_4a.png \
		image_series/square_5a.png \
		image_series/square_6a.png \
		image_series/square_7a.png
	convert -delay 100 -loop 0 $(shell ls $^ | sort) $@;

image_series/square_0a.png : image_series/square_0.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/square_1a.png : image_series/square_1.png

	convert -background "#FFFFFF" -flatten $^ $@

image_series/square_2a.png : image_series/square_2.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/square_3a.png : image_series/square_3.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/square_4a.png : image_series/square_4.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/square_5a.png : image_series/square_5.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/square_6a.png : image_series/square_6.png
	convert -background "#FFFFFF" -flatten $^ $@

image_series/square_7a.png : image_series/square_7.png
	convert -background "#FFFFFF" -flatten $^ $@

images/star_burst.gif :\
		image_series/star_burst_*.png
	convert -delay 300 -loop 0 $(shell ls $^ | sort) $@

