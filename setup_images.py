#!/usr/bin/env python3
"""
具身智能研究报告网站 - 插图自动复制脚本

使用方法:
    python3 setup_images.py

功能:
    从 /Users/qddoc/qoderwork/jszn/ 目录复制所有 PNG/JPG 图片到 images/ 目录
"""

import os
import shutil
from pathlib import Path

# 源目录和目标目录
SOURCE_DIR = Path('/Users/qddoc/qoderwork/jszn/')
TARGET_DIR = Path(__file__).parent / 'images'

# 支持的图片格式
IMAGE_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.webp', '.gif'}

def copy_images():
    """复制插图文件到网站目录"""
    
    # 检查源目录是否存在
    if not SOURCE_DIR.exists():
        print(f"❌ 源目录不存在：{SOURCE_DIR}")
        print("\n💡 提示：请确认插图文件所在的正确路径")
        return False
    
    # 创建目标目录
    TARGET_DIR.mkdir(parents=True, exist_ok=True)
    print(f"✅ 目标目录已准备：{TARGET_DIR}")
    
    # 获取所有图片文件
    image_files = []
    for file in SOURCE_DIR.iterdir():
        if file.suffix.lower() in IMAGE_EXTENSIONS:
            image_files.append(file)
    
    if not image_files:
        print(f"⚠️  在 {SOURCE_DIR} 中没有找到图片文件")
        print(f"   支持的格式：{', '.join(IMAGE_EXTENSIONS)}")
        return False
    
    print(f"\n📸 找到 {len(image_files)} 个图片文件:")
    
    # 复制文件
    copied_count = 0
    for img_path in sorted(image_files):
        target_path = TARGET_DIR / img_path.name
        
        try:
            shutil.copy2(img_path, target_path)
            print(f"  ✓ {img_path.name:40s} → images/{img_path.name}")
            copied_count += 1
        except Exception as e:
            print(f"  ✗ {img_path.name:40s} → 错误：{e}")
    
    print(f"\n✅ 完成！成功复制 {copied_count}/{len(image_files)} 个文件")
    
    if copied_count > 0:
        print(f"\n🌐 现在可以刷新浏览器查看效果：http://localhost:8080/index.html")
        print(f"📝 详细说明请查看：README_插图使用说明.md")
    
    return True

if __name__ == '__main__':
    print("=" * 60)
    print("🎨 具身智能研究报告 - 插图自动复制工具")
    print("=" * 60)
    print()
    
    success = copy_images()
    
    if not success:
        print("\n" + "=" * 60)
        print("💡 手动操作指南:")
        print("=" * 60)
        print("1. 打开 Finder，进入目录：/Users/qddoc/qoderwork/jszn/")
        print("2. 选择所有 PNG/JPG 图片文件")
        print("3. 复制到目录：/Users/qddoc/.real/users/user-136e2a60b44a453357d394c89ffa1322/workspace/embodied-ai-report/images/")
        print("4. 刷新浏览器查看效果")
        print()
