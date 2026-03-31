#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
重命名插图文件为有意义的名称
"""

import os
import shutil

# 图片目录
images_dir = '/Users/qddoc/.real/users/user-136e2a60b44a453357d394c89ffa1322/workspace/embodied-ai-report/images'

# 重命名映射（根据生成时间戳推断）
rename_map = {
    'generated_image_1774841453685.jpg': 'history_timeline.jpg',           # 发展历史时间线
    'generated_image_1774841454524.jpg': 'tech_architecture.jpg',            # 技术架构全景图
    'generated_image_1774841484016.jpg': 'world_model_llm.jpg',              # 世界模型 vs LLM
    'generated_image_1774841485549.jpg': 'brain_cerebellum.jpg',             # 大脑小脑对比图
    'generated_image_1774841486088.jpg': 'future_outlook.jpg',               # 未来展望
}

# 执行重命名
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
print("\n新的文件列表：")
for f in sorted(os.listdir(images_dir)):
    print(f"  - {f}")
