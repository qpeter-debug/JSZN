#!/usr/bin/env python3
import os
import shutil

images_dir = '/Users/qddoc/.real/users/user-136e2a60b44a453357d394c89ffa1322/workspace/embodied-ai-report/images'

rename_map = {
    'generated_image_1774841453685.jpg': 'history_timeline.jpg',
    'generated_image_1774841454524.jpg': 'tech_architecture.jpg',
    'generated_image_1774841484016.jpg': 'world_model_llm.jpg',
    'generated_image_1774841485549.jpg': 'brain_cerebellum.jpg',
    'generated_image_1774841486088.jpg': 'future_outlook.jpg',
}

print("开始重命名插图文件...")
for old_name, new_name in rename_map.items():
    old_path = os.path.join(images_dir, old_name)
    new_path = os.path.join(images_dir, new_name)
    if os.path.exists(old_path):
        shutil.move(old_path, new_path)
        print(f"✓ {old_name} → {new_name}")
    else:
        print(f"✗ 文件不存在：{old_name}")

print("\n重命名完成！")
